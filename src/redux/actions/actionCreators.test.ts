import {
  ActionInterface,
  CreateSpotActionInterface,
  DeleteSpotActionInterface,
  LoadSpotsActionInterface,
  LoginUserActionInterface,
} from "../../types/ActionInterface";
import { SpotInterface } from "../../types/SpotInterface";
import { LoggedUserInterface } from "../../types/UserInterface";
import {
  createSpotAction,
  deleteSpotAction,
  loadSpotsAction,
  loginUserAction,
  logoutUserAction,
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
          createdBy: { id: "62274dd6fb4746a872d98b8d", username: "testMan" },
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
          createdBy: { id: "62274dd6fb4746a872d98b8d", username: "testMan" },
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
        createdBy: { id: "62274dd6fb4746a872d98b8d", username: "testMan" },
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

describe("Given a loginUserAction function", () => {
  describe("When it receives a userCredentials object", () => {
    test("Then it should return an action with type login-user and the user credentials", () => {
      const userData: LoggedUserInterface = {
        username: "TestMan",
        id: "testId",
        image: "testImage",
        loggedIn: true,
        admin: false,
      };
      const expectedAction: LoginUserActionInterface = {
        type: actionTypes.loginUser,
        userData,
      };

      const action: LoginUserActionInterface = loginUserAction(userData);

      expect(action).toEqual(expectedAction);
    });
  });
});

describe("Given a logoutUserAction function", () => {
  describe("When it's called", () => {
    test("Then it should return an action with type logout-user", () => {
      const expectedAction: ActionInterface = {
        type: actionTypes.logoutUser,
      };

      const action: ActionInterface = logoutUserAction();

      expect(action).toEqual(expectedAction);
    });
  });
});
