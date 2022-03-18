import SpotInterface from "./SpotInterface";
import UserInterface from "./UserInterface";

export interface ActionInterface {
  type: string;
}
export interface LoadSpotsActionInterface extends ActionInterface {
  spots: SpotInterface[];
}

export interface DeleteSpotActionInterface extends ActionInterface {
  id: string;
}

export interface CreateSpotActionInterface extends ActionInterface {
  spot: SpotInterface;
}

export interface UpdateSpotActionInterface extends ActionInterface {
  spot: SpotInterface;
}

export interface RegisterUserActionInterface extends ActionInterface {
  user: UserInterface;
}
