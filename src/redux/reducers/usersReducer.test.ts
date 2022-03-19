import { LoginUserActionInterface } from "../../types/ActionInterface";
import { LoggedUserInterface } from "../../types/UserInterface";
import actionTypes from "../actions/actionTypes";
import usersReducer from "./usersReducer";

describe("Given an usersReducer fucntion", () => {
  describe("When it receives a login action with an user", () => {
    test("Then it should return the new user", () => {
      const defaultUser = {
        username: "",
        id: "",
        image: "",
        loggedIn: false,
        admin: false,
      };
      const userData: LoggedUserInterface = {
        username: "testMan",
        id: "testId",
        image: "testImage",
        loggedIn: true,
        admin: false,
      };
      const action: LoginUserActionInterface = {
        type: actionTypes.loginUser,
        userData,
      };

      const newUser: LoggedUserInterface = usersReducer(defaultUser, action);

      expect(newUser).toEqual(userData);
    });
  });
});
