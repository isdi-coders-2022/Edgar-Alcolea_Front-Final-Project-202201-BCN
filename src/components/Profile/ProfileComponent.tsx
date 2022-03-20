import { useAppSelector } from "../../redux/hooks";

const StyledProfile = styled.div``;

const Profile = (): JSX.Element => {
  const user = useAppSelector((state) => state.user);

  return (
    <StyledProfile>
      <img
        src={userDetails.image}
        alt={userDetails.username}
        className="profile-image"
      />
      <p className="profile-details">{userDetails.username}</p>
      <p className="profile-details">{userDetails.name}</p>
      <p className="profile-details">{userDetails.age}</p>
      <p className="profile-details">{userDetails.city}</p>
      <p className="profile-details">{userDetails.bio}</p>
    </StyledProfile>
  );
};

export default Profile;
