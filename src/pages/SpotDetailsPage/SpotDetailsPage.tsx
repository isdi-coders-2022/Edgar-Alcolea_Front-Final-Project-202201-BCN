import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SpotForm from "../../components/SpotForm/SpotForm";
import { SpotInterface } from "../../types/SpotInterface";
import StyledDetailsContainer from "./StyledDetailsContainer.style";

const SpotDetailsPage = (): JSX.Element => {
  const { id } = useParams();

  const blankSpot: SpotInterface = {
    id: "",
    name: "",
    description: "",
    xCoordinate: 0,
    yCoordinate: 0,
    location: "",
    image: "",
    createdBy: {
      id: "",
      username: "",
    },
  };
  const [isEdit, setIsEdit] = useState(false);
  const [spotDetails, setSpotDetails] = useState<SpotInterface>(blankSpot);

  const handleClick = () => {
    setIsEdit(true);
  };

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}spots/${id}`
      );
      const spotData = await response.json();
      setSpotDetails(spotData);
    }
    fetchData();
  }, [id]);

  return (
    <>
      {isEdit === false ? (
        <StyledDetailsContainer>
          <h1 className="page-title--mobile">Spot Discovered</h1>
          <h1 className="page-title--details">{spotDetails.name}</h1>
          <p title="spot-title" className="spot-title">
            {spotDetails.name}
          </p>
          <div className="details-container">
            <div className="image-container">
              <img
                src={spotDetails.image}
                alt={spotDetails.name}
                className="profile-image"
              />
            </div>
            <div className="profile-info">
              <p className="profile-details--description">
                {spotDetails.description}
              </p>
              <div className="times-marked">
                <p className="profile-details--desktop">
                  <span>Discovered by: </span>
                  {spotDetails.createdBy.username}
                </p>
                <span>Marked: </span>
                <svg
                  width="26"
                  height="20"
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
                <p>{`x ${spotDetails.marked}`}</p>
              </div>
              <p className="profile-details--description--desktop">
                {spotDetails.description}
              </p>
              <p className="profile-details--mobile">
                <span>Discovered by: </span>
                {spotDetails.createdBy.username}
              </p>

              <p className="profile-details">
                <span>Location: </span>
                {spotDetails.location}
              </p>

              <div className="map-container">
                <iframe
                  title="spot-map"
                  className="iframe"
                  src={`https://maps.google.com/?ll=${spotDetails.xCoordinate},${spotDetails.yCoordinate}&z=16&output=embed`}
                  frameBorder="0"
                ></iframe>
              </div>
              <button type="button" onClick={handleClick}>
                Edit
              </button>
            </div>
          </div>
        </StyledDetailsContainer>
      ) : (
        <StyledDetailsContainer>
          <SpotForm isEdit={true} spotDetails={spotDetails} />
        </StyledDetailsContainer>
      )}
    </>
  );
};
export default SpotDetailsPage;
