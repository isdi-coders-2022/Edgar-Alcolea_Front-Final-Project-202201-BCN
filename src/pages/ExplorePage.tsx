import { useEffect } from "react";
import { useDispatch } from "react-redux";
import SpotComponent from "../components/SpotComponent/SpotComponent";
import loadSpotsThunk from "../redux/thunks/spotsThunks";
import SpotInterface from "../types/SpotInterface";

const ExplorePage = (): JSX.Element => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadSpotsThunk);
  }, [dispatch]);

  const spot: SpotInterface = {
    name: "Tempest Freerunning Academy",
    marked: 100,
    description:
      "Indoor facility with crazy props and themed spots, training programs and gym.",
    createdBy: "testID",
    location: "Los Angeles",
    coordinates: [33.920548123347544, -118.33193817357487],
    image:
      "https://images.squarespace-cdn.com/content/v1/59b30729ccc5c5736a2325c1/1517258406485-RVEAFZDOHK6LYIW42PM3/DSC08963+%281%29.jpg?format=1000w",
  };

  return (
    <>
      <ul className="spot-list">
        <SpotComponent spot={spot} />
      </ul>
    </>
  );
};

export default ExplorePage;
