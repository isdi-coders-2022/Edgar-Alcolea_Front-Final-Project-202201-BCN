import {
  CreateSpotActionInterface,
  DeleteSpotActionInterface,
  LoadSpotsActionInterface,
  LoginUserActionInterface,
  RegisterUserActionInterface,
} from "../../types/ActionInterface";
import { LoginFormInterface } from "../../types/LoginFormInterface";
import SpotInterface from "../../types/SpotInterface";
import UserInterface from "../../types/UserInterface";
import {
  createSpotAction,
  deleteSpotAction,
  loadSpotsAction,
  loginUserAction,
  registerUserAction,
} from "./actionCreators";

import actionTypes from "./actionTypes";

describe("Given a loadSpotsAction", () => {
  describe("When it gets called", () => {
    test('Then it should return an action with type "load-spots"', () => {
      const spots: SpotInterface[] = [
        {
          id: "1",
          name: "Tempest Freerunning Academy",
          marked: 100,
          description:
            "Indoor facility with crazy props and themed spots, training programs and gym.",
          createdBy: "testID",
          location: "Next to L.A.X airport",
          xCoordinate: 24.215,
          yCoordinate: 45.751,
          image: "testImg",
        },
        {
          id: "2",
          name: "Test Place",
          marked: 20,
          description: "A place that exists just for the purpose of testing.",
          createdBy: "testID",
          location: "The mind",
          xCoordinate: 24.215,
          yCoordinate: 45.751,
          image: "testImg",
        },
      ];
      const expectedAction: LoadSpotsActionInterface = {
        type: actionTypes.loadSpots,
        spots,
      };

      const action: LoadSpotsActionInterface = loadSpotsAction(spots);

      expect(action).toEqual(expectedAction);
    });
  });
});

describe("Given a deleteSpotAction function", () => {
  describe("When it receives an id", () => {
    test('Then it should return an action with type "delete-spot" and the id', () => {
      const id: string = "deleteMe";
      const expectedAction: DeleteSpotActionInterface = {
        type: actionTypes.deleteSpot,
        id,
      };

      const action: DeleteSpotActionInterface = deleteSpotAction(id);

      expect(action).toEqual(expectedAction);
    });
  });
});

describe("Given a createSpotAction function", () => {
  describe("When it receives a spot", () => {
    test('Then it should return an action with type "create-spot" and the spot', () => {
      const spot: SpotInterface = {
        id: "2",
        name: "Test Place",
        description: "A place that exists just for the purpose of testing.",
        location: "The mind",
        xCoordinate: 24.215,
        yCoordinate: 45.751,
        image: "testImg",
      };
      const expectedAction: CreateSpotActionInterface = {
        type: actionTypes.createSpot,
        spot,
      };

      const action: CreateSpotActionInterface = createSpotAction(spot);

      expect(action).toEqual(expectedAction);
    });
  });
});

describe("Given a registerUserAction function", () => {
  describe("When it receives a user", () => {
    test("Then it should return an action with type register-user and the user", () => {
      const user: UserInterface = {
        name: "Test Place",
        username: "TestMan",
        password: "testpass",
        bio: "A place that exists just for the purpose of testing.",
        age: 20,
        city: "The mind",
        image: "testImg",
      };
      const expectedAction: RegisterUserActionInterface = {
        type: actionTypes.registerUser,
        user,
      };

      const action: RegisterUserActionInterface = registerUserAction(user);

      expect(action).toEqual(expectedAction);
    });
  });
});

describe("Given a loginUserAction function", () => {
  describe("When it receives a userCredentials object", () => {
    test("Then it should return an action with type login-user and the user credentials", () => {
      const userCredentials: LoginFormInterface = {
        username: "TestMan",
        password: "testpass",
      };
      const expectedAction: LoginUserActionInterface = {
        type: actionTypes.loginUser,
        userCredentials,
      };

      const action: LoginUserActionInterface = loginUserAction(userCredentials);

      expect(action).toEqual(expectedAction);
    });
  });
});
