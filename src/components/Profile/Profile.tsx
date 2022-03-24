import styled from "styled-components";
import { useAppSelector } from "../../redux/hooks";

const StyledProfile = styled.div`
  @media (max-width: 600px) {
    cursor: pointer;
    display: flex;
    align-items: center;
    padding: 0px 30px 0px 20px;
    transition: all 0.2s;
    img {
      object-fit: cover;
      width: 45px;
      height: 45px;
      border-radius: 50%;
    }
    .navigation__profile__signed,
    .navigation__profile__username {
      display: none;
    }
  }
  @media (min-width: 600px) {
    cursor: pointer;
    display: flex;
    align-items: center;
    padding: 0px 30px 0px 20px;
    transition: all 0.2s;
    img {
      object-fit: cover;
      width: 50px;
      height: 50px;
      border-radius: 50%;
    }

    height: inherit;
    width: 240px;
    display: flex;
    justify-content: space-between;
    margin-left: auto;
    &:hover {
      background-color: ${(props) => props.theme.colors.primary};
      .navigation__profile__signed {
        color: ${(props) => props.theme.colors.secondary};
      }
      .navigation__profile__username {
        color: ${(props) => props.theme.colors.white};
      }
    }
    .navigation__profile__signed {
      color: ${(props) => props.theme.colors.white};
    }
  }
`;

const Profile = (): JSX.Element => {
  const user = useAppSelector((state) => state.user);
  const defaultImage =
    "https://plataformacine.com/images/user-icon-placeholder-clear.png";

  return (
    <StyledProfile className="navigation__profile">
      <p className="navigation__profile__signed">Signed in as</p>
      <img
        src={user.image === "null" ? defaultImage : user.image}
        alt={user.username}
        className="profile-image"
      />
      <p className="navigation__profile__username">{user.username}</p>
    </StyledProfile>
  );
};

export default Profile;
