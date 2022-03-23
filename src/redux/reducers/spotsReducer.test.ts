import {
  ActionInterface,
  CreateSpotActionInterface,
  DeleteSpotActionInterface,
  LoadSpotsActionInterface,
  UpdateSpotActionInterface,
} from "../../types/ActionInterface";
import { SpotInterface } from "../../types/SpotInterface";
import {
  createSpotAction,
  loadSpotsAction,
  updateSpotAction,
} from "../actions/actionCreators";
import actionTypes from "../actions/actionTypes";

import spotsReducer from "./spotsReducer";

describe("Given a spotsReducer function", () => {
  describe("When it receives a loadSpotsAction", () => {
    test("Then it should return a new state with the action payload", () => {
      const spots: SpotInterface[] = [
        {
          id: "test1",
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
          id: "test2",
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
      const action: LoadSpotsActionInterface = loadSpotsAction(spots);

      const newSpots: SpotInterface[] = spotsReducer([], action);

      expect(newSpots).toEqual(spots);
    });
  });

  describe("When it receives an action with invalid type", () => {
    test("Then it should return the current state", () => {
      const spots: SpotInterface[] = [];
      const action: ActionInterface = { type: "hello" };

      const newSpots: SpotInterface[] = spotsReducer(undefined, action);

      expect(newSpots).toEqual(spots);
    });
  });

  describe("When it receives a deleteSpotAction", () => {
    test("Then it should return the current state without the spot with the action payload's id", () => {
      const spots: SpotInterface[] = [
        {
          id: "test1",
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
          id: "test2",
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
      const expectedSpots: SpotInterface[] = [
        {
          id: "test1",
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
      ];
      const id = "test2";
      const action: DeleteSpotActionInterface = {
        type: actionTypes.deleteSpot,
        id,
      };

      const newSpots: SpotInterface[] = spotsReducer(spots, action);

      expect(newSpots).toEqual(expectedSpots);
    });
  });

  describe("When it receives a createSpotAction", () => {
    test("Then it should return a new state with the action payload's spot added", () => {
      const currentSpots: SpotInterface[] = [
        {
          id: "test1",
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
      ];
      const spot = {
        id: "test2",
        name: "Test Place",
        marked: 20,
        description: "A place that exists just for the purpose of testing.",
        createdBy: { id: "62274dd6fb4746a872d98b8d", username: "testMan" },
        location: "The mind",
        xCoordinate: 24.215,
        yCoordinate: 45.751,
        image: "testImg",
      };
      const expectedSpots = [
        {
          id: "test1",
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
          id: "test2",
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
      const action: CreateSpotActionInterface = createSpotAction(spot);

      const newSpots: SpotInterface[] = spotsReducer(currentSpots, action);

      expect(newSpots).toEqual(expectedSpots);
    });
  });

  describe("When it receives an updateSpotAction", () => {
    test("Then it should return the spots with the updated one", () => {
      const currentSpots: SpotInterface[] = [
        {
          id: "test1",
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
          id: "test2",
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
      ];
      const spot = {
        id: "test1",
        name: "Updated Spot",
        marked: 20,
        description: "A place that exists just for the purpose of testing.",
        createdBy: { id: "62274dd6fb4746a872d98b8d", username: "testMan" },
        location: "The mind",
        xCoordinate: 24.215,
        yCoordinate: 45.751,
        image: "testImg",
      };
      const expectedSpots = [
        {
          id: "test1",
          name: "Updated Spot",
          marked: 20,
          description: "A place that exists just for the purpose of testing.",
          createdBy: { id: "62274dd6fb4746a872d98b8d", username: "testMan" },
          location: "The mind",
          xCoordinate: 24.215,
          yCoordinate: 45.751,
          image: "testImg",
        },
        {
          id: "test2",
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
      ];

      const action: UpdateSpotActionInterface = updateSpotAction(spot);

      const newSpots: SpotInterface[] = spotsReducer(currentSpots, action);

      expect(newSpots).toEqual(expectedSpots);
    });
  });
});
