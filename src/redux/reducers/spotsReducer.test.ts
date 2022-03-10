import {
  actionInterface,
  loadSpotsActionInterface,
} from "../../types/actionInterface";
import SpotInterface from "../../types/SpotInterface";
import loadSpotsAction from "../actions/actionCreators";
import spotsReducer from "./spotsReducer";

describe("Given a spotsReducer function", () => {
  describe("When it receives a loadSpotsAction", () => {
    test("Then it should return a new state with the action payload", () => {
      const spots: SpotInterface[] = [
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
      ];
      const action: loadSpotsActionInterface = loadSpotsAction(spots);

      const newSpots: SpotInterface[] = spotsReducer([], action);

      expect(newSpots).toEqual(spots);
    });
  });

  describe("When it receives an action with invalid type", () => {
    test("Then it should return the current state", () => {
      const spots: SpotInterface[] = [];
      const action: actionInterface = { type: "hello" };

      const newSpots: SpotInterface[] = spotsReducer(undefined, action);

      expect(newSpots).toEqual(spots);
    });
  });
});
