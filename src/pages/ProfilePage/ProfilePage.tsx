import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { logoutUserAction } from "../../redux/actions/actionCreators";
import { useAppSelector } from "../../redux/hooks";
import { UserInterface } from "../../types/UserInterface";
import StyledProfilePage from "./StyledProfilePage.style";

const ProfilePage = (): JSX.Element => {
  const { id } = useParams();
  const loggedUser = useAppSelector((state) => state.user);
  const blankUser: UserInterface = {
    name: "",
    username: "",
    password: "",
    age: 0,
    bio: "",
    city: "",
    image: "",
  };
  const defaultImage =
    "https://plataformacine.com/images/user-icon-placeholder-clear.png";

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
    <StyledProfilePage>
      <h1 className="page-title">
        {loggedUser.id === id
          ? `Your profile`
          : `${userDetails.username}'s profile`}
      </h1>
      <div className="profile">
        <div className="image-container">
          <img
            src={
              userDetails.image === "null" ? defaultImage : userDetails.image
            }
            alt={userDetails.username}
            className="profile-image"
          />
          <p className="profile-details">{userDetails.username}</p>
          {loggedUser.id === id && (
            <button
              className="button-desktop"
              type="button"
              onClick={handleClick}
            >
              Logout
            </button>
          )}
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
        {loggedUser.id === id && (
          <button className="button-mobile" type="button" onClick={handleClick}>
            Logout
          </button>
        )}
      </div>
    </StyledProfilePage>
  );
};
export default ProfilePage;
