import { useDispatch } from "react-redux";
import { deleteSpotThunk } from "../../redux/thunks/spotsThunks";
import SpotInterface from "../../types/SpotInterface";
import DeleteButton from "../DeleteButton/DeleteButton";
import SpotStyled from "./SpotStyled.style";

interface SpotProps {
  spot: SpotInterface;
}

const SpotComponent = ({
  spot: { name, marked, location, image, id },
}: SpotProps): JSX.Element => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(deleteSpotThunk(id));
  };

  return (
    <SpotStyled>
      <img className="spot-image" src={image} alt="spot" />
      <p className="spot-name">{name}</p>
      <div className="spot-info">
        {" "}
        <div className="times-marked">
          <svg
            width="32"
            height="26"
            viewBox="0 0 32 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.2249 2.60012C15.0128 1.38058 16.7967 1.38058 17.5847 2.60011L23.6578 12L29.4174 20.9147C30.2772 22.2454 29.3219 24 27.7375 24H15.9048H4.07206C2.48767 24 1.53237 22.2454 2.39217 20.9147L8.15177 12L14.2249 2.60012Z"
              stroke="#BA1A97"
              strokeWidth="3"
            />
          </svg>
          <p>{`x ${marked}`}</p>
        </div>
        <p className="spot-location">{location}</p>
      </div>
      <DeleteButton actionOnClick={handleClick} />
    </SpotStyled>
  );
};

export default SpotComponent;
