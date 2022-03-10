import { Dispatch } from "redux";
import SpotInterface from "../../types/SpotInterface";
import loadSpotsAction from "../actions/actionCreators";

const loadSpotsThunk = async (dispatch: Dispatch) => {
  const apiURL: string | undefined = process.env.REACT_APP_API_URL;
  const response: Response = await fetch(`${apiURL}spots`);
  const spots: SpotInterface[] = await response.json();
  dispatch(loadSpotsAction(spots));
};

export default loadSpotsThunk;
