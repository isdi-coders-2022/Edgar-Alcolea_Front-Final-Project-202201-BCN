import jwtDecode from "jwt-decode";
import { toast } from "react-toastify";
import { Dispatch } from "redux";
import { LoginUserActionInterface } from "../../types/ActionInterface";
import {
  RegisterFormInterface,
  LoginFormInterface,
} from "../../types/LoginFormInterface";
import { SpotInterface } from "../../types/SpotInterface";
import { LoggedUserInterface, UserInterface } from "../../types/UserInterface";
import { loadSpotsAction, loginUserAction } from "../actions/actionCreators";

import { AppThunk } from "../store";

export const registerUserThunk =
  (user: RegisterFormInterface): AppThunk =>
  async (): Promise<void> => {
    const age = user.age.toString();
    const data = new FormData();
    data.append("name", user.name);
    data.append("username", user.username);
    data.append("password", user.password);
    data.append("age", age);
    data.append("bio", user.bio);
    data.append("city", user.city);
    data.append("image", user.image as Blob);
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}users/register`,
      {
        method: "POST",
        body: data,
      }
    );
    if (response.ok) {
      const newUser = await response.json();
      toast.success(`${newUser.username} registered!`);
    } else {
      const { message } = await response.json();
      toast.error(message);
    }
  };

export const userLoginThunk =
  (userData: LoginFormInterface) =>
  async (dispatch: Dispatch<LoginUserActionInterface>) => {
    const createToast = toast.loading("Logging in...");
    const response: Response = await fetch(
      `${process.env.REACT_APP_API_URL}users/login`,
      {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(userData),
      }
    );
    if (response.ok) {
      const { token } = await response.json();
      const { id, username, image, admin } =
        jwtDecode<LoggedUserInterface>(token);
      localStorage.setItem("token", token);
      dispatch(loginUserAction({ id, username, image, loggedIn: true, admin }));
      toast.update(createToast, {
        render: `Welcome ${username}!`,
        isLoading: false,
        type: "success",
        theme: "dark",
        autoClose: 2000,
      });
    } else {
      const { message } = await response.json();
      toast.update(createToast, {
        render: `Oops! ${message}`,
        isLoading: false,
        type: "error",
        theme: "dark",
        autoClose: 2000,
      });
    }
  };

export const getUserSpotsThunk =
  (id: string): AppThunk =>
  async (dispatch): Promise<void> => {
    const response: Response = await fetch(
      `${process.env.REACT_APP_API_URL}users/${id}`
    );
    const user: UserInterface = await response.json();
    dispatch(loadSpotsAction(user.createdSpots as SpotInterface[]));
  };
