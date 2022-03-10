import SpotInterface from "../../types/SpotInterface";
import loadSpotsAction from "../actions/actionCreators";
import { AppDispatch, AppThunk } from "../store";

const loadSpotsThunk: AppThunk = async (dispatch: AppDispatch) => {
  const apiURL: string | undefined = process.env.REACT_APP_API_URL;
  const response: Response = await fetch(`${apiURL}spots`);
  const spots: SpotInterface[] = await response.json();
  dispatch(loadSpotsAction(spots));
};

export default loadSpotsThunk;
