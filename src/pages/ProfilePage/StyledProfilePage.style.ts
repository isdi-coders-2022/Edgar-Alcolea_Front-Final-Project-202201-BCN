import styled from "styled-components";

const StyledProfilePage = styled.div`
  @media (max-width: 600px) {
    background-color: ${(props) => props.theme.colors.background};
    margin: 0 auto;
    color: ${(props) => props.theme.colors.white};
    width: 95%;
    padding: 20px;
    display: flex;
    align-items: center;
    flex-direction: column;
    .profile {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .page-title {
      text-align: center;
      color: #2ef051;
      position: relative;
      margin: 0px auto;
      top: -70px;
      font-weight: 200;
      font-size: 20px;
      user-select: none;
    }
    .image-container {
      align-self: flex-start;
      display: flex;
      height: fit-content;
      align-items: center;
      p {
        color: ${(props) => props.theme.colors.primary};
        font-size: 24px;
        margin-left: 20px;
      }
    }
    .button-mobile {
      width: 40%;
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
    .button-desktop {
      display: none;
    }
    .profile-info {
      padding: 20px;
    }
    img {
      object-fit: cover;
      width: 150px;
      height: 150px;
      border-radius: 50%;
    }
    span {
      color: ${(props) => props.theme.colors.primary};
      margin-right: 5px;
    }
  }
  @media (min-width: 600px) {
    margin: 0 auto;
    color: ${(props) => props.theme.colors.white};
    display: flex;
    align-items: center;
    flex-direction: column;
    .profile {
      background-color: ${(props) => props.theme.colors.secondary};
      border-radius: ${(props) => props.theme.borderRadius};
      padding: 30px;
      width: 40%;
      height: 50vh;
    }
    .page-title {
      text-align: center;
      color: ${(props) => props.theme.colors.primary};
      position: relative;
      width: fit-content;
      margin: 20px auto;
      user-select: none;
    }
    .image-container {
      display: flex;
      height: fit-content;
      align-items: center;

      p {
        color: ${(props) => props.theme.colors.primary};
        font-size: 24px;
        margin-left: 20px;
      }
      .button-desktop {
        margin-left: auto;
        margin-right: 20px;
        transition: all 0.5s;
        font-family: "Sora", -apple-system, BlinkMacSystemFont, "Segoe UI",
          Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
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
    .button-mobile {
      display: none;
    }
    .profile-info {
      padding: 20px;
    }
    img {
      object-fit: cover;
      width: 150px;
      height: 150px;
      border-radius: 50%;
    }
    span {
      color: ${(props) => props.theme.colors.primary};
      margin-right: 5px;
    }
  }
`;

export default StyledProfilePage;
