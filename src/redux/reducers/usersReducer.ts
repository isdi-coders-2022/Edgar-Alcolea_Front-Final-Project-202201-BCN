import {
  ActionInterface,
  LoginUserActionInterface,
} from "../../types/ActionInterface";
import { LoggedUserInterface } from "../../types/UserInterface";
import actionTypes from "../actions/actionTypes";

const defaultUser = {
  username: "",
  id: "",
  image: "",
  loggedIn: false,
  admin: false,
};

const usersReducer = (
  currentUser: LoggedUserInterface = defaultUser,
  action: ActionInterface
): LoggedUserInterface => {
  let newUser: LoggedUserInterface;

  switch (action.type) {
    case actionTypes.loginUser:
      newUser = (action as LoginUserActionInterface).userData;
      break;
    case actionTypes.logoutUser:
      newUser = defaultUser;
      break;
    default:
      newUser = { ...currentUser };
      break;
  }
  return newUser;
};

export default usersReducer;
