import SpotInterface from "./SpotInterface";

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
