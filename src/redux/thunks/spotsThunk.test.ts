import actionTypes from "../actions/actionTypes";
import loadSpotsThunk from "./spotsThunks";

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
