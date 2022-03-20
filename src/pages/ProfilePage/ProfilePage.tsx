import { useEffect, useState } from "react";
import styled from "styled-components";
import { UserInterface } from "../../types/UserInterface";
const StyledContainer = styled.div`
  background-color: ${(props) => props.theme.colors.secondary};
  border-radius: ${(props) => props.theme.borderRadius};
`;

interface ProfilePagesProps {
  id: string;
}

const ProfilePage = ({ id }: ProfilePagesProps): JSX.Element => {
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
      </StyledContainer>
    </>
  );
};
export default ProfilePage;
