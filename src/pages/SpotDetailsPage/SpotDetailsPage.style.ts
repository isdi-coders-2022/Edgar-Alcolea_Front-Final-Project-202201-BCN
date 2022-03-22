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
      img {
        width: 95%;
        height: 300px;
        border-radius: ${(props) => props.theme.borderRadius};
        object-fit: cover;
      }
    }
    .profile-info {
      padding: 0px;
    }

    span {
      color: ${(props) => props.theme.colors.primary};
      margin-right: 5px;
    }
    .profile-details {
      margin-top: 0px;
      margin-left: 10px;
    }
    .profile-details--mobile {
      margin-top: 0px;
      margin-left: 10px;
    }
    .profile-details--desktop {
      display: none;
    }
    .profile-details--description {
      margin-top: 15px;
      margin-bottom: 0px;
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
    margin: 0 auto;
    background-color: ${(props) => props.theme.colors.secondary};
    border-radius: ${(props) => props.theme.borderRadius};
    color: ${(props) => props.theme.colors.white};
    width: 60%;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 20px;
    .image-container {
      display: flex;
      justify-content: center;
      width: 93%;
    }
    button {
      margin-left: 25%;
      margin-top: 20px;
      width: 50%;
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
    .profile-info {
      width: 90%;
      margin-top: 20px;
      background-color: ${(props) => props.theme.colors.background};
      border-radius: ${(props) => props.theme.borderRadius};
      padding: 0px 20px 20px 20px;
      .times-marked {
        width: 90%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        height: 50px;
        color: #fff;
        margin-left: 10px;
        .profile-details--desktop {
          margin-right: auto;
        }
        p {
          font-size: 18px;
          margin-left: 5px;
        }
      }
      .profile-details--mobile {
        display: none;
      }
      .profile-details--description {
        display: none;
      }
    }
    img {
      width: 100%;
      height: 300px;
      border-radius: ${(props) => props.theme.borderRadius};
      object-fit: cover;
    }
    span {
      color: ${(props) => props.theme.colors.primary};
      margin-right: 5px;
    }
    .map-container {
      display: flex;
      justify-content: center;
      iframe {
        border-radius: ${(props) => props.theme.borderRadius};
        height: 250px;
        width: 90%;
      }
    }
  }
`;

export default StyledDetailsContainer;
