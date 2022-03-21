import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Button from "../../components/Button/Button";
import Loading from "../../components/Loading/Loading";
import SpotComponent from "../../components/SpotComponent/SpotComponent";
import { useAppSelector } from "../../redux/hooks";
import { loadSpotsThunk } from "../../redux/thunks/spotsThunks";

const ExplorePage = (): JSX.Element => {
  const dispatch = useDispatch();
  const spots = useAppSelector((state) => state.spots);
  const spotsPerPage = 2;
  const [visibleSpots, setVisibleSpots] = useState(spotsPerPage);

  useEffect(() => {
    dispatch(loadSpotsThunk);
  }, [dispatch]);

  const loadMore = (): void => {
    setVisibleSpots((prevValue) => prevValue + spotsPerPage);
  };

  return (
    <>
      <h1 className="page-title">Explore</h1>
      {spots.length === 0 && <Loading />}
      <ul className="spot-list">
        {spots.slice(0, visibleSpots).map((spot) => (
          <SpotComponent key={spot.id} spot={spot} />
        ))}
        {spots.length > visibleSpots && <Button actionOnClick={loadMore} />}
      </ul>
    </>
  );
};

export default ExplorePage;
