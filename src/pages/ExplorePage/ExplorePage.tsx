import { useEffect } from "react";
import { useDispatch } from "react-redux";
import SpotComponent from "../../components/SpotComponent/SpotComponent";
import { useAppSelector } from "../../redux/hooks";
import { loadSpotsThunk } from "../../redux/thunks/spotsThunks";

const ExplorePage = (): JSX.Element => {
  const dispatch = useDispatch();
  const spots = useAppSelector((state) => state.spots);

  useEffect(() => {
    dispatch(loadSpotsThunk);
  }, [dispatch]);

  return (
    <>
      <h1 className="page-title">Explore</h1>
      <ul className="spot-list">
        {spots.map((spot) => (
          <SpotComponent key={spot.id} spot={spot} />
        ))}
      </ul>
    </>
  );
};

export default ExplorePage;
