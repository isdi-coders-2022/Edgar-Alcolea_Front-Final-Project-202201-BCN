import styled from "styled-components";

const StyledDetailsContainer = styled.div`
  @media (max-width: 600px) {
    background-color: ${(props) => props.theme.colors.background};
    margin: 0 auto;
    color: ${(props) => props.theme.colors.white};
    width: 95%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    button {
      width: 60%;
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
    }
    .times-marked {
      display: flex;
      align-items: center;
      height: 50px;
      color: #fff;
      margin-left: 10px;
      p {
        font-size: 18px;
        margin-top: 20px;
        margin-left: 5px;
      }
    }
    .image-container {
      display: flex;
      justify-content: center;
    }
    .profile-info {
      padding: 0px;
    }
    img {
      width: 95%;
      height: 300px;
      border-radius: ${(props) => props.theme.borderRadius};
      object-fit: cover;
    }
    span {
      color: ${(props) => props.theme.colors.primary};
      margin-right: 5px;
    }
    .profile-details {
      margin-top: 0px;
      margin-left: 10px;
    }
    .map-container {
      display: flex;
      align-items: center;
      flex-direction: column;
      margin-bottom: 10px;
      iframe {
        border-radius: ${(props) => props.theme.borderRadius};
        height: 300px;
        width: 95%;
      }
    }
  }
  @media (min-width: 600px) {
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
  }
`;

export default StyledDetailsContainer;
