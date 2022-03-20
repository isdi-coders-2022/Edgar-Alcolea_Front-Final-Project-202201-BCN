import styled from "styled-components";
import { useAppSelector } from "../../redux/hooks";

const StyledProfile = styled.div`
  display: flex;
  align-items: center;
`;

const Profile = (): JSX.Element => {
  const user = useAppSelector((state) => state.user);

  return (
    <StyledProfile>
      <p className="profile-details">Signed in as</p>
      <img src={user.image} alt={user.username} className="profile-image" />
      <p className="profile-details">{user.username}</p>
    </StyledProfile>
  );
};

export default Profile;
