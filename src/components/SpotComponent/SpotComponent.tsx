import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";
import { deleteSpotThunk } from "../../redux/thunks/spotsThunks";
import { SpotInterface } from "../../types/SpotInterface";
import DeleteButton from "../DeleteButton/DeleteButton";
import SpotStyled from "./SpotStyled.style";

interface SpotProps {
  spot: SpotInterface;
  mySpots: boolean;
  filterCity: (city: string) => void;
}

const SpotComponent = ({
  spot: { name, marked, location, image, id, description, createdBy },
  mySpots,
  filterCity,
}: SpotProps): JSX.Element => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useAppSelector((state) => state.user);

  const handleClick = (event: React.FormEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    dispatch(deleteSpotThunk(id));
  };

  const goToDetails = () => {
    navigate(`/spots/${id}`);
  };

  const goToCreator = (event: React.FormEvent<HTMLButtonElement>): void => {
    event.stopPropagation();
    navigate(`/profile/${createdBy.id}`);
  };

  const handleFilterClick = (
    event: React.FormEvent<HTMLButtonElement>
  ): void => {
    event.stopPropagation();
    filterCity(location);
  };

  return (
    <SpotStyled onClick={goToDetails}>
      <div className="spot-container">
        <img className="spot-image" src={image} alt="spot" />
        <p className="spot-name">{name}</p>
        <div className="spot-info">
          {" "}
          <div className="times-marked">
            <svg
              width="30"
              height="24"
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
          {!mySpots && (
            <p className="spot-created">
              <span>Created by: </span>
              <button className="spot-created--link" onClick={goToCreator}>
                {" "}
                {createdBy?.username}
              </button>
            </p>
          )}
          <p className="spot-location">{location}</p>
        </div>
        <div className="delete-button">
          {user.admin && <DeleteButton actionOnClick={handleClick} />}
        </div>
      </div>

      <div className="spot-info--desktop">
        <p className="spot-name--desktop">{name}</p>
        <p className="spot-description">{description}</p>
        <p>
          <span className="spot-location--desktop">Location: </span>
          <button className="spot-created--link" onClick={handleFilterClick}>
            {location}
          </button>
        </p>
      </div>
      <div className="delete-button--desktop">
        {user.admin && <DeleteButton actionOnClick={handleClick} />}
      </div>
    </SpotStyled>
  );
};

export default SpotComponent;
