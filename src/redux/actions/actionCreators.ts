import ObjectID from "bson-objectid";
import {
  DeleteSpotActionInterface,
  LoadSpotsActionInterface,
} from "../../types/ActionInterface";
import SpotInterface from "../../types/SpotInterface";
import actionTypes from "./actionTypes";

const loadSpotsAction = (spots: SpotInterface[]): LoadSpotsActionInterface => ({
  type: actionTypes.loadSpots,
  spots,
});

export const deleteSpotAction = (id: ObjectID): DeleteSpotActionInterface => ({
  type: actionTypes.deleteSpot,
  id,
});
