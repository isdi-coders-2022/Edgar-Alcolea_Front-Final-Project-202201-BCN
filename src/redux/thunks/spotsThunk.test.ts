import {
  CreateSpotActionInterface,
  DeleteSpotActionInterface,
} from "../../types/ActionInterface";
import SpotInterface from "../../types/SpotInterface";
import actionTypes from "../actions/actionTypes";
import {
  createSpotThunk,
  deleteSpotThunk,
  loadSpotsThunk,
} from "./spotsThunks";

describe("Given a loadSpotsThunk function", () => {
  describe("When it receives a dispatch function", () => {
    test("Then it should call dispatch with an action", async () => {
      const expectedAction = {
        spots: [
          {
            id: "1",
            name: "Tempest Freerunning Academy",
            marked: 100,
            description:
              "Indoor facility with crazy props and themed spots, training programs and gym.",
            createdBy: "testID",
            location: "Next to L.A.X airport",
            coordinates: [33.920548123347544, -118.33193817357487],
            image: "testImg",
          },
          {
            id: "2",
            name: "Test Place",
            marked: 20,
            description: "A place that exists just for the purpose of testing.",
            createdBy: "testID",
            location: "The mind",
            coordinates: [0, 0],
            image: "testImg",
          },
        ],
        type: actionTypes.loadSpots,
      };
      const dispatch = jest.fn();
      const getState = jest.fn();

      await loadSpotsThunk(dispatch, getState, undefined);

      expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });
  });
});

describe("Given a deleteSpotThunk function", () => {
  describe("When it receives an id", () => {
    test("Then it should call dispatch with the given id", async () => {
      const dispatch = jest.fn();
      const getState = jest.fn();
      const id: string = "3";
      const expectedAction: DeleteSpotActionInterface = {
        id,
        type: actionTypes.deleteSpot,
      };

      const thunkFunction = deleteSpotThunk(id);
      await thunkFunction(dispatch, getState, undefined);

      expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });
  });

  describe("When it receives an non existent id", () => {
    test("Then it shouldn't call dispatch", async () => {
      const dispatch = jest.fn();
      const getState = jest.fn();
      const id: string = "9";

      const thunkFunction = deleteSpotThunk(id);
      await thunkFunction(dispatch, getState, undefined);

      expect(dispatch).not.toHaveBeenCalled();
    });
  });
});

describe("Given a createSpotThunk function", () => {
  describe("When it receives a spot", () => {
    test("Then it should call dispatch with the given spot", async () => {
      const dispatch = jest.fn();
      const getState = jest.fn();
      const spot: SpotInterface = {
        id: "test2",
        name: "Test Place",
        marked: 20,
        description: "A place that exists just for the purpose of testing.",
        createdBy: "testID",
        location: "The mind",
        xCoordinate: 24.215,
        yCoordinate: 45.751,
        image: "testImg",
      };
      const expectedAction: CreateSpotActionInterface = {
        spot,
        type: actionTypes.createSpot,
      };

      const thunkFunction = createSpotThunk(spot);
      await thunkFunction(dispatch, getState, undefined);

      expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });
  });
});
