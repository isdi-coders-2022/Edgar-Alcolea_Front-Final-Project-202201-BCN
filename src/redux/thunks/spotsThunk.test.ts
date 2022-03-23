import { errorHandlers } from "../../mocks/handlers";
import server from "../../mocks/server";
import {
  CreateSpotActionInterface,
  DeleteSpotActionInterface,
} from "../../types/ActionInterface";
import SpotFormInterface from "../../types/SpotFormInterface";
import { SpotInterface } from "../../types/SpotInterface";
import actionTypes from "../actions/actionTypes";
import {
  createSpotThunk,
  deleteSpotThunk,
  loadSpotsThunk,
  updateSpotThunk,
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
      const file: any = new File(["hello"], "hello.png", { type: "image/png" });
      const createdSpot: SpotFormInterface = {
        name: "Test Place",
        description: "A place that exists just for the purpose of testing.",
        location: "The mind",
        coordinates: "24.215,45.751",
        image: file,
        createdBy: "62274dd6fb4746a872d98b8d",
      };
      const spot: SpotInterface = {
        id: "test2",
        name: "Test Place",
        marked: 20,
        description: "A place that exists just for the purpose of testing.",
        createdBy: { id: "62274dd6fb4746a872d98b8d", username: "testMan" },
        location: "The mind",
        xCoordinate: 24.215,
        yCoordinate: 45.751,
        image: "hello",
      };
      const expectedAction: CreateSpotActionInterface = {
        type: actionTypes.createSpot,
        spot,
      };

      const thunkFunction = createSpotThunk(createdSpot);
      await thunkFunction(dispatch, getState, undefined);

      expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });
  });

  describe("When the response it's an error", () => {
    test("Then it shouldn't call dispatch", async () => {
      const dispatch = jest.fn();
      const getState = jest.fn();
      const file: any = new File(["hello"], "hello.png", { type: "image/png" });
      server.use(...errorHandlers);
      const createdSpot: SpotFormInterface = {
        name: "Test Place",
        description: "A place that exists just for the purpose of testing.",
        location: "The mind",
        coordinates: "24.215,45.751",
        image: file,
        createdBy: "62274dd6fb4746a872d98b8d",
      };

      const thunkFunction = createSpotThunk(createdSpot);
      await thunkFunction(dispatch, getState, undefined);

      expect(dispatch).not.toHaveBeenCalled();
    });
  });
});

describe("Given an updateSpotThunk function", () => {
  describe("When it receives a spot", () => {
    test("Then it should call dispatch with the given spot", async () => {
      const dispatch = jest.fn();
      const getState = jest.fn();
      const file: any = new File(["hello"], "hello.png", { type: "image/png" });
      const updatedSpot: SpotFormInterface = {
        id: "123456",
        name: "Updated Spot",
        description: "A place that exists just for the purpose of testing.",
        location: "The mind",
        coordinates: "24.215,45.751",
        image: file,
      };
      const spot: SpotInterface = {
        id: "123456",
        name: "Updated Spot",
        marked: 0,
        description: "A place that exists just for the purpose of testing.",
        createdBy: { id: "62274dd6fb4746a872d98b8d", username: "testMan" },
        location: "The mind",
        xCoordinate: 24.215,
        yCoordinate: 45.751,
        image: "hello",
      };
      const expectedAction: CreateSpotActionInterface = {
        type: actionTypes.updateSpot,
        spot,
      };

      const thunkFunction = updateSpotThunk(updatedSpot);
      await thunkFunction(dispatch, getState, undefined);

      expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });
  });

  describe("When the response it's an error", () => {
    test("Then it shouldn't call dispatch", async () => {
      const dispatch = jest.fn();
      const getState = jest.fn();
      const file: any = new File(["hello"], "hello.png", { type: "image/png" });
      server.use(...errorHandlers);
      const updatedSpot: SpotFormInterface = {
        id: "123456",
        name: "Updated Spot",
        description: "A place that exists just for the purpose of testing.",
        location: "The mind",
        coordinates: "24.215,45.751",
        image: file,
      };

      const thunkFunction = updateSpotThunk(updatedSpot);
      await thunkFunction(dispatch, getState, undefined);

      expect(dispatch).not.toHaveBeenCalled();
    });
  });
});
