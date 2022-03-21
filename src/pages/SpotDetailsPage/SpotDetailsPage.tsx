import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import SpotForm from "../../components/SpotForm/SpotForm";
import { logoutUserAction } from "../../redux/actions/actionCreators";
import { SpotInterface } from "../../types/SpotInterface";

const StyledDetailsContainer = styled.div`
  background-color: ${(props) => props.theme.colors.secondary};
  border-radius: ${(props) => props.theme.borderRadius};
  margin: 0 auto;
  color: ${(props) => props.theme.colors.white};
  width: 85%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  button {
    margin-left: auto;
    margin-right: 20px;
    transition: all 0.5s;
    font-family: "Sora", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #fff;
    font-weight: 400;
    font-size: 20px;
    background: ${(props) => props.theme.colors.secondary};
    border: 0px solid #2ef051;
    box-sizing: border-box;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    cursor: pointer;
    padding: 15px;

    &:hover {
      background: ${(props) => props.theme.colors.highlight};
    }
    .image-container {
      display: flex;
      align-items: center;
      p {
        color: ${(props) => props.theme.colors.primary};
        font-size: 24px;
        margin-left: 20px;
      }
    }
  }
  .profile-info {
    padding: 0px 20px 20px 20px;
  }
  img {
    width: 60vw;
    height: 300px;
    border-radius: ${(props) => props.theme.borderRadius};
    object-fit: cover;
  }
  span {
    color: ${(props) => props.theme.colors.primary};
    margin-right: 5px;
  }
  .map-container iframe {
    border-radius: ${(props) => props.theme.borderRadius};
    height: 300px;
    width: 600px;
  }
`;

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

  const dispatch = useDispatch();
  const navigate = useNavigate();

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
      <h1 className="page-title">{spotDetails.name}</h1>
      {isEdit === false ? (
        <StyledDetailsContainer>
          <button type="button" onClick={handleClick}>
            Edit
          </button>
          <div className="image-container">
            <img
              src={spotDetails.image}
              alt={spotDetails.name}
              className="profile-image"
            />
          </div>
          <div className="profile-info">
            <p className="profile-details">
              <span>Name: </span>
              {spotDetails.name}
            </p>
            <p className="profile-details">
              <span>Marked: </span>
              {`${spotDetails.marked} times`}
            </p>
            <p className="profile-details">
              <span>Location: </span>
              {spotDetails.location}
            </p>
            <p className="profile-details">
              <span>Description: </span>
              {spotDetails.description}
            </p>
            <div className="map-container">
              <iframe
                title="spot-map"
                className="iframe"
                src={`https://maps.google.com/?ll=${spotDetails.xCoordinate},${spotDetails.yCoordinate}&z=16&output=embed`}
                frameBorder="0"
              ></iframe>
            </div>
          </div>
        </StyledDetailsContainer>
      ) : (
        <SpotForm />
      )}
    </>
  );
};
export default SpotDetailsPage;
