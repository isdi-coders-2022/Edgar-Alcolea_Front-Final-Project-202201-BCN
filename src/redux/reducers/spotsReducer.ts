import {
  ActionInterface,
  CreateSpotActionInterface,
  DeleteSpotActionInterface,
  LoadSpotsActionInterface,
} from "../../types/ActionInterface";
import SpotInterface from "../../types/SpotInterface";
import actionTypes from "../actions/actionTypes";

const spotsReducer = (
  currentSpots: SpotInterface[] = [],
  action: ActionInterface
): Array<SpotInterface> => {
  let newSpots: SpotInterface[];

  switch (action.type) {
    case actionTypes.loadSpots:
      newSpots = (action as LoadSpotsActionInterface).spots;
      break;
    case actionTypes.deleteSpot:
      newSpots = currentSpots.filter(
        (spot) => spot.id !== (action as DeleteSpotActionInterface).id
      );
      break;
    case actionTypes.createSpot:
      newSpots = [...currentSpots, (action as CreateSpotActionInterface).spot];
      break;
    default:
      newSpots = [...currentSpots];
      break;
  }
  return newSpots;
};

export default spotsReducer;
