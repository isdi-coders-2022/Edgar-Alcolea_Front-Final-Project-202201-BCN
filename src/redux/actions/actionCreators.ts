import {
  CreateSpotActionInterface,
  DeleteSpotActionInterface,
  LoadSpotsActionInterface,
  LoginUserActionInterface,
  RegisterUserActionInterface,
  UpdateSpotActionInterface,
} from "../../types/ActionInterface";
import { LoginFormInterface } from "../../types/LoginFormInterface";
import SpotInterface from "../../types/SpotInterface";
import UserInterface from "../../types/UserInterface";

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

export const registerUserAction = (
  user: UserInterface
): RegisterUserActionInterface => ({
  type: actionTypes.registerUser,
  user,
});

export const loginUserAction = (
  userCredentials: LoginFormInterface
): LoginUserActionInterface => ({
  type: actionTypes.loginUser,
  userCredentials,
});
