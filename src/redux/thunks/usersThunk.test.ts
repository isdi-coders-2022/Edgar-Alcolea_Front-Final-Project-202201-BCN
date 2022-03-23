import { toast } from "react-toastify";
import { errorHandlers } from "../../mocks/handlers";
import server from "../../mocks/server";
import {
  getUserSpotsThunk,
  registerUserThunk,
  userLoginThunk,
} from "./usersThunk";

describe("Given a userLoginThunk function", () => {
  describe("When it receives valid userData", () => {
    test("Then it should call dispatch with that userData", async () => {
      const user = { username: "TestMan", password: "testpass" };
      const dispatch = jest.fn();
      const thunkFunction = userLoginThunk(user);
      await thunkFunction(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });

  describe("When the entered password is wrong", () => {
    test("Then it should call the toast method update", async () => {
      server.use(...errorHandlers);
      const user = { username: "TestMan", password: "testpass" };
      const dispatch = jest.fn();
      const thunkFunction = userLoginThunk(user);
      await thunkFunction(dispatch);

      expect(dispatch).not.toHaveBeenCalled();
    });
  });
});

describe("Given a getSpotThunk function", () => {
  describe("When it receives an id", () => {
    test("Then it should call dispatch", async () => {
      const id = "123";
      const dispatch = jest.fn();
      const getState = jest.fn();

      const thunkFunction = getUserSpotsThunk(id);
      await thunkFunction(dispatch, getState, undefined);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});

describe("Given a userRegisterThunk function", () => {
  describe("When entered a username in use", () => {
    test("Then it should not call dispatch", async () => {
      server.use(...errorHandlers);
      const file: any = new File(["hello"], "hello.png", { type: "image/png" });
      const user = {
        username: "TestMan",
        password: "testpass",
        name: "tested",
        age: 99,
        bio: "none",
        city: "testcity",
        image: file,
      };
      const getState = jest.fn();
      const dispatch = jest.fn();

      const thunkFunction = registerUserThunk(user);
      await thunkFunction(dispatch, getState, undefined);

      expect(dispatch).not.toHaveBeenCalled();
    });
  });

  describe("When entered valid data", () => {
    test("Then it should call toast method success", async () => {
      const file: any = new File(["hello"], "hello.png", { type: "image/png" });
      const user = {
        username: "TestMan",
        password: "testpass",
        name: "tested",
        age: 99,
        bio: "none",
        city: "testcity",
        image: file,
      };

      const mockToastSuccess = jest.spyOn(toast, "success");

      const getState = jest.fn();
      const dispatch = jest.fn();

      const thunkFunction = registerUserThunk(user);
      await thunkFunction(dispatch, getState, undefined);

      expect(mockToastSuccess).toHaveBeenCalled();
    });
  });
});
