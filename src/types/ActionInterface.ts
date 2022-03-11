import ObjectID from "bson-objectid";
import SpotInterface from "./SpotInterface";

export interface ActionInterface {
  type: string;
}
export interface LoadSpotsActionInterface extends ActionInterface {
  spots: SpotInterface[];
}

export interface DeleteSpotActionInterface extends ActionInterface {
  id: ObjectID;
}
