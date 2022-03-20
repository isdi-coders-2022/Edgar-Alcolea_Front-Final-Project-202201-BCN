import styled from "styled-components";
import { useAppSelector } from "../../redux/hooks";

const StyledProfile = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 30px;
    padding: 5px;
    border: 1px solid ${(props) => props.theme.colors.primary};
    border-radius: 50%;
  }
`;

const Profile = (): JSX.Element => {
  const user = useAppSelector((state) => state.user);
  const defaultImage =
    "https://plataformacine.com/images/user-icon-placeholder-clear.png";

  return (
    <StyledProfile className="navigation__profile">
      <p className="profile-details">Signed in as</p>
      <img
        src={user.image === "null" ? defaultImage : user.image}
        alt={user.username}
        className="profile-image"
      />
      <p className="profile-details">{user.username}</p>
    </StyledProfile>
  );
};

export default Profile;
