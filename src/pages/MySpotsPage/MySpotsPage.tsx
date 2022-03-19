import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Loading from "../../components/Loading/Loading";
import SpotComponent from "../../components/SpotComponent/SpotComponent";
import { useAppSelector } from "../../redux/hooks";
import { loadSpotsThunk } from "../../redux/thunks/spotsThunks";

const MySpotsPage = (): JSX.Element => {
  const dispatch = useDispatch();
  const spots = useAppSelector((state) => state.spots);
  const user = useAppSelector((state) => state.user);
  const mySpots = spots.filter((spot) => spot.createdBy.id === user.id);

  useEffect(() => {
    dispatch(loadSpotsThunk);
  }, [dispatch]);

  return (
    <>
      <h1 className="page-title">My Spots</h1>
      {spots.length === 0 && <Loading />}
      <ul className="spot-list">
        {mySpots.map((spot) => (
          <SpotComponent key={spot.id} spot={spot} />
        ))}
      </ul>
    </>
  );
};
export default MySpotsPage;
