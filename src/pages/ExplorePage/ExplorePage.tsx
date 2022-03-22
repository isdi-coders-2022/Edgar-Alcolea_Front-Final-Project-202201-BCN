import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Button from "../../components/Button/Button";
import Loading from "../../components/Loading/Loading";
import SpotComponent from "../../components/SpotComponent/SpotComponent";
import { loadSpotsAction } from "../../redux/actions/actionCreators";
import { useAppSelector } from "../../redux/hooks";
import { loadSpotsThunk } from "../../redux/thunks/spotsThunks";
import StyledExplorePage from "./StyledExplorePage.style";

const ExplorePage = (): JSX.Element => {
  const dispatch = useDispatch();
  const spots = useAppSelector((state) => state.spots);
  const spotsPerPage = 2;
  const [visibleSpots, setVisibleSpots] = useState(spotsPerPage);
  const [filtered, setFiltered] = useState(false);
  useEffect(() => {
    dispatch(loadSpotsThunk);
  }, [dispatch]);

  const loadMore = (): void => {
    setVisibleSpots((prevValue) => prevValue + spotsPerPage);
  };

  const filterSpots = (city: string): void => {
    const filteredSpots = spots.filter((spot) => spot.location === city);
    dispatch(loadSpotsAction(filteredSpots));
    setFiltered(true);
  };

  const restoreFilter = (): void => {
    dispatch(loadSpotsThunk);
    setFiltered(false);
  };
  return (
    <StyledExplorePage>
      <h1 className="page-title">Explore</h1>
      {spots.length === 0 && <Loading />}
      <ul className="spot-list">
        {filtered && (
          <button className="filter-button" onClick={restoreFilter}>
            Restore filters
          </button>
        )}
        {spots.slice(0, visibleSpots).map((spot) => (
          <SpotComponent
            key={spot.id}
            spot={spot}
            mySpots={false}
            filterCity={filterSpots}
          />
        ))}
        {spots.length > visibleSpots && <Button actionOnClick={loadMore} />}
      </ul>
    </StyledExplorePage>
  );
};

export default ExplorePage;
