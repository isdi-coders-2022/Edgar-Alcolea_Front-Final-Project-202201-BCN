import {
  ActionInterface,
  CreateSpotActionInterface,
  DeleteSpotActionInterface,
  LoadSpotsActionInterface,
  LoginUserActionInterface,
  UpdateSpotActionInterface,
} from "../../types/ActionInterface";
import { SpotInterface } from "../../types/SpotInterface";
import { LoggedUserInterface } from "../../types/UserInterface";

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

export const updateSpotAction = (
  spot: SpotInterface
): UpdateSpotActionInterface => ({
  type: actionTypes.updateSpot,
  spot,
});

export const loginUserAction = (
  userData: LoggedUserInterface
): LoginUserActionInterface => ({
  type: actionTypes.loginUser,
  userData,
});

export const logoutUserAction = (): ActionInterface => ({
  type: actionTypes.logoutUser,
});
