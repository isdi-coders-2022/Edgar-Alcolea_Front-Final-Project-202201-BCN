import { LoadSpotsActionInterface } from "../../types/ActionInterface";
import SpotInterface from "../../types/SpotInterface";
import loadSpotsAction from "./actionCreators";
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
      const expectedAction: LoadSpotsActionInterface = {
        type: actionTypes.loadSpots,
        spots,
      };

      const action: LoadSpotsActionInterface = loadSpotsAction(spots);

      expect(action).toEqual(expectedAction);
    });
  });
});
