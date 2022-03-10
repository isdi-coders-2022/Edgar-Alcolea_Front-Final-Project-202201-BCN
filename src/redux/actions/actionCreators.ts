import { loadSpotsActionInterface } from "../../types/actionInterface";
import SpotInterface from "../../types/SpotInterface";
import actionTypes from "./actionTypes";

const loadSpotsAction = (spots: SpotInterface[]): loadSpotsActionInterface => ({
  type: actionTypes.loadSpots,
  spots,
});

export default loadSpotsAction;
