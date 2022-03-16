import SpotFormInterface from "../../types/SpotFormInterface";
import SpotInterface from "../../types/SpotInterface";
import {
  createSpotAction,
  deleteSpotAction,
  loadSpotsAction,
} from "../actions/actionCreators";

import { AppDispatch, AppThunk } from "../store";

export const loadSpotsThunk: AppThunk = async (dispatch): Promise<void> => {
  const apiURL: string | undefined = process.env.REACT_APP_API_URL;
  const response: Response = await fetch(`${apiURL}spots`);
  const spots: SpotInterface[] = await response.json();
  dispatch(loadSpotsAction(spots));
};

export const deleteSpotThunk =
  (id: string): AppThunk =>
  async (dispatch: AppDispatch): Promise<void> => {
    const response: Response = await fetch(
      `${process.env.REACT_APP_API_URL}spots/delete/${id}`,
      {
        method: "DELETE",
      }
    );
    if (response.ok) {
      dispatch(deleteSpotAction(id));
    }
  };

export const createSpotThunk =
  (spot: SpotFormInterface): AppThunk =>
  async (dispatch: AppDispatch): Promise<void> => {
    const data = new FormData();
    data.append("name", spot.name);
    data.append("description", spot.description);
    data.append("location", spot.location);
    data.append("xCoordinate", (spot.xCoordinate as number).toString());
    data.append("yCoordinate", (spot.yCoordinate as number).toString());
    data.append("image", spot.image as Blob);

    const response: Response = await fetch(
      `${process.env.REACT_APP_API_URL}spots/new`,
      {
        method: "POST",
        body: data,
      }
    );
    if (response.ok) {
      const newSpot = await response.json();
      dispatch(createSpotAction(newSpot));
    }
  };
