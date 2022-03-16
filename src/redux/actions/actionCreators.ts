import {
  CreateSpotActionInterface,
  DeleteSpotActionInterface,
  LoadSpotsActionInterface,
} from "../../types/ActionInterface";
import SpotInterface from "../../types/SpotInterface";
import actionTypes from "./actionTypes";

export const loadSpotsAction = (
  spots: SpotInterface[]
): LoadSpotsActionInterface => ({
  type: actionTypes.loadSpots,
  spots,
});

export const deleteSpotAction = (id: string): DeleteSpotActionInterface => ({
  type: actionTypes.deleteSpot,
  id,
});

export const createSpotAction = (
  spot: SpotInterface
): CreateSpotActionInterface => ({
  type: actionTypes.createSpot,
  spot,
});
