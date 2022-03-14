import SpotInterface from "../../types/SpotInterface";
import { deleteSpotAction, loadSpotsAction } from "../actions/actionCreators";

import { AppDispatch, AppThunk } from "../store";

export const loadSpotsThunk: AppThunk = async (dispatch): Promise<void> => {
  const apiURL: string | undefined = process.env.REACT_APP_API_URL;
  const response: Response = await fetch(`${apiURL}spots`);
  const spots: SpotInterface[] = await response.json();
  dispatch(loadSpotsAction(spots));
};

export const deleteSpotThunk: AppThunk =
  (id): AppThunk =>
  async (dispatch: AppDispatch): Promise<void> => {
    const response: Response = await fetch(
      `${process.env.REACT_APP_API_URL}spots/delete/${id}`,
      {
        method: "DELETE",
      }
    );
    const { id } = await response.json();
    if (response.ok) {
      dispatch(deleteSpotAction(id));
    }
  };
