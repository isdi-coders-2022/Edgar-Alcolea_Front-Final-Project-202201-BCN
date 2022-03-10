import SpotInterface from "./SpotInterface";

export interface ActionInterface {
  type: string;
}
export interface LoadSpotsActionInterface extends ActionInterface {
  spots: SpotInterface[];
}
