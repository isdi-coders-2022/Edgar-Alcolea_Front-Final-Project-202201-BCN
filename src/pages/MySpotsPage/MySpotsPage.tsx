import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Button from "../../components/Button/Button";
import Loading from "../../components/Loading/Loading";
import SpotComponent from "../../components/SpotComponent/SpotComponent";
import { useAppSelector } from "../../redux/hooks";
import { loadSpotsThunk } from "../../redux/thunks/spotsThunks";

const MySpotsPage = (): JSX.Element => {
  const dispatch = useDispatch();
  const spots = useAppSelector((state) => state.spots);
  const user = useAppSelector((state) => state.user);
  const spotsPerPage = 2;
  const [visibleSpots, setVisibleSpots] = useState(spotsPerPage);

  useEffect(() => {
    dispatch(loadSpotsThunk);
  }, [dispatch]);

  const mySpots = spots.filter((spot) => spot.createdBy.id === user.id);

  const loadMore = (): void => {
    setVisibleSpots((prevValue) => prevValue + spotsPerPage);
  };

  return (
    <>
      <h1 className="page-title">My Spots</h1>
      {mySpots.length === 0 && <Loading />}
      <ul className="spot-list">
        {mySpots.slice(0, visibleSpots).map((spot) => (
          <SpotComponent key={spot.id} spot={spot} />
        ))}
        {mySpots.length > visibleSpots && <Button actionOnClick={loadMore} />}
      </ul>
    </>
  );
};
export default MySpotsPage;
