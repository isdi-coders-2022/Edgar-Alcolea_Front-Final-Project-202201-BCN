import { LoadSpotsActionInterface } from "../../types/ActionInterface";
import SpotInterface from "../../types/SpotInterface";
import actionTypes from "./actionTypes";

const loadSpotsAction = (spots: SpotInterface[]): LoadSpotsActionInterface => ({
  type: actionTypes.loadSpots,
  spots,
});

export default loadSpotsAction;
