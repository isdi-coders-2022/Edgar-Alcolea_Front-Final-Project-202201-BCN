import SpotInterface from "./SpotInterface";

export interface actionInterface {
  type: string;
}
export interface loadSpotsActionInterface extends actionInterface {
  spots: SpotInterface[];
}
