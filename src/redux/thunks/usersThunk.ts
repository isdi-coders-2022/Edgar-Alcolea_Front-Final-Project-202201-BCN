import { toast } from "react-toastify";
import { RegisterFormInterface } from "../../types/LoginFormInterface";
import { AppThunk } from "../store";

export const registerUserThunk =
  (user: RegisterFormInterface): AppThunk =>
  async (): Promise<void> => {
    const createToast = toast.loading("Registering...🏃");
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

      toast.update(createToast, {
        render: `${newUser.username} registered!`,
        isLoading: false,
        type: "success",
        theme: "dark",
        autoClose: 1500,
      });
    }
  };

export default registerUserThunk;
