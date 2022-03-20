import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { logoutUserAction } from "../../redux/actions/actionCreators";
import SpotFormInterface from "../../types/SpotFormInterface";
import { SpotInterface } from "../../types/SpotInterface";
import { UserInterface } from "../../types/UserInterface";

const StyledDetailsContainer = styled.div`
  background-color: ${(props) => props.theme.colors.secondary};
  border-radius: ${(props) => props.theme.borderRadius};
  margin: 0 auto;
  color: ${(props) => props.theme.colors.white};
  width: 80%;
  height: 50vh;
  padding: 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  .image-container {
    display: flex;
    height: fit-content;
    align-items: center;

    p {
      color: ${(props) => props.theme.colors.primary};
      font-size: 24px;
      margin-left: 20px;
    }
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
        background: red;
      }
    }
  }
  .profile-info {
    padding: 20px;
  }
  img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
  }
  span {
    color: ${(props) => props.theme.colors.primary};
    margin-right: 5px;
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

  const [spotDetails, setSpotDetails] = useState<SpotInterface>(blankSpot);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClick = () => {
    localStorage.removeItem("token");
    dispatch(logoutUserAction());
    navigate("/login");
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
      <StyledDetailsContainer>
        <div className="image-container">
          <img
            src={spotDetails.image}
            alt={spotDetails.name}
            className="profile-image"
          />
          <p className="profile-details">{spotDetails.name}</p>
          <button type="button" onClick={handleClick}>
            Edit
          </button>
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
            <span>City: </span>
            {spotDetails.location}
          </p>
          <p className="profile-details">
            <span>Bio: </span>
            {spotDetails.description}
          </p>
        </div>
      </StyledDetailsContainer>
    </>
  );
};
export default SpotDetailsPage;
