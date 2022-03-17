import { toast } from "react-toastify";
import SpotFormInterface from "../../types/SpotFormInterface";
import SpotInterface from "../../types/SpotInterface";
import {
  createSpotAction,
  deleteSpotAction,
  loadSpotsAction,
  updateSpotAction,
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
      toast("Spot deleted!", { theme: "dark" });
    }
  };

export const createSpotThunk =
  (spot: SpotFormInterface): AppThunk =>
  async (dispatch: AppDispatch): Promise<void> => {
    const createToast = toast.loading("Discovering...🔎");
    const coordinates = spot.coordinates.split(", ");
    const data = new FormData();
    data.append("name", spot.name);
    data.append("description", spot.description);
    data.append("location", spot.location);
    data.append("xCoordinate", coordinates[0]);
    data.append("yCoordinate", coordinates[1]);
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
      toast.update(createToast, {
        render: "Spot created!",
        isLoading: false,
        type: "success",
        theme: "dark",
        autoClose: 1500,
      });
    }
  };

export const updateSpotThunk =
  (spot: SpotFormInterface): AppThunk =>
  async (dispatch: AppDispatch): Promise<void> => {
    const createToast = toast.loading("Updating...🔨");
    const coordinates = spot.coordinates.split(", ");
    const data = new FormData();
    data.append("name", spot.name);
    data.append("description", spot.description);
    data.append("location", spot.location);
    data.append("xCoordinate", coordinates[0]);
    data.append("yCoordinate", coordinates[1]);
    data.append("image", spot.image as Blob);

    const response: Response = await fetch(
      `${process.env.REACT_APP_API_URL}spots/${spot.id}`,
      {
        method: "PUT",
        body: data,
      }
    );
    if (response.ok) {
      const updatedSpot = await response.json();
      dispatch(updateSpotAction(updatedSpot));
      toast.update(createToast, {
        render: "Spot updated!",
        isLoading: false,
        type: "success",
        theme: "dark",
        autoClose: 1500,
      });
    }
  };
