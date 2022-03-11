import { AnyAction } from "redux";
import SpotInterface from "../../types/SpotInterface";
import actionTypes from "../actions/actionTypes";

const spotsReducer = (
  currentSpots: SpotInterface[] = [],
  action: AnyAction
): Array<SpotInterface> => {
  let newSpots: SpotInterface[];

  switch (action.type) {
    case actionTypes.loadSpots:
      newSpots = action.spots;
      break;
    case actionTypes.deleteSpot:
      newSpots = currentSpots.filter((spot) => spot.id !== action.id);
      break;
    default:
      newSpots = [...currentSpots];
      break;
  }
  return newSpots;
};

export default spotsReducer;
