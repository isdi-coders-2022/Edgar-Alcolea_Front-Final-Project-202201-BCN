import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { logoutUserAction } from "../../redux/actions/actionCreators";
import { UserInterface } from "../../types/UserInterface";

const StyledContainer = styled.div`
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

const ProfilePage = (): JSX.Element => {
  const { id } = useParams();

  const blankUser: UserInterface = {
    name: "",
    username: "",
    password: "",
    age: 0,
    bio: "",
    city: "",
    image: "",
  };

  const [userDetails, setUserDetails] = useState<UserInterface>(blankUser);
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
        `${process.env.REACT_APP_API_URL}users/${id}`
      );
      const userData = await response.json();
      setUserDetails(userData);
    }
    fetchData();
  }, [id]);

  return (
    <>
      <h1 className="page-title">Your Profile</h1>
      <StyledContainer>
        <div className="image-container">
          <img
            src={userDetails.image}
            alt={userDetails.username}
            className="profile-image"
          />
          <p className="profile-details">{userDetails.username}</p>
          <button type="button" onClick={handleClick}>
            Logout
          </button>
        </div>
        <div className="profile-info">
          <p className="profile-details">
            <span>Name: </span>
            {userDetails.name}
          </p>
          <p className="profile-details">
            <span>Age: </span>
            {userDetails.age}
          </p>
          <p className="profile-details">
            <span>City: </span>
            {userDetails.city}
          </p>
          <p className="profile-details">
            <span>Bio: </span>
            {userDetails.bio}
          </p>
        </div>
      </StyledContainer>
    </>
  );
};
export default ProfilePage;
