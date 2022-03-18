import { LoginUserActionInterface } from "../../types/ActionInterface";
import { LoggedUserInterface } from "../../types/UserInterface";
import actionTypes from "../actions/actionTypes";
import usersReducer from "./usersReducer";

describe("Given an usersReducer fucntion", () => {
  describe("When it receives a login action with an user", () => {
    test("Then it should return the new user", () => {
      const defaultUser = { username: "", id: "", image: "" };
      const user: LoggedUserInterface = {
        username: "testMan",
        id: "testId",
        image: "testImage",
      };
      const action: LoginUserActionInterface = {
        type: actionTypes.loginUser,
        user,
      };

      const newUser: LoggedUserInterface = usersReducer(defaultUser, action);

      expect(newUser).toEqual(user);
    });
  });
});
