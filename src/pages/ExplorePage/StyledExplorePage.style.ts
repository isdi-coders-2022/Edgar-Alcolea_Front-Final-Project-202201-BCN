import styled from "styled-components";

const StyledExplorePage = styled.div`
  .spot-list {
    display: flex;
    flex-direction: column;
    align-items: center;
    list-style: none;
    padding: 0px;
  }

  @media (max-width: 600px) {
    .page-title {
      text-align: center;
      color: #2ef051;
      position: relative;
      width: fit-content;
      margin: 0px auto;
      top: -50px;
      font-weight: 200;
      font-size: 20px;
      user-select: none;
    }
    .page-title--mobile {
      text-align: center;
      color: #2ef051;
      position: relative;
      width: fit-content;
      margin: 0px auto;
      top: -50px;
      font-weight: 200;
      font-size: 20px;
      user-select: none;
    }
    .page-title--details {
      display: none;
    }

    .spot-title {
      color: #fff;
      text-align: center;
      font-size: 25px;
      margin-top: 0px;
      margin-bottom: 15px;
    }
    .login-title {
      text-align: center;
      color: #fff;
      width: 548px;
      height: 60px;
      left: calc(50% - 548px / 2 - 1px);
      top: calc(50% - 60px / 2 - 347px);
      font-style: normal;
      font-weight: normal;
      padding: 10px;
      margin-bottom: 20px;
      font-size: 30px;
      line-height: 60px;
    }
    .login-image {
      position: relative;
      top: -19px;
      width: 122px;
      height: 122px;
      transform: rotate(17.46deg);
      z-index: -1;
    }

    .register-image {
      position: relative;
      top: -20px;
      width: 122px;
      height: 122px;
      z-index: -1;
    }
    .spot-list {
      display: flex;
      flex-direction: column;
      align-items: center;
      list-style: none;
      padding: 0px;
      margin: 0px;
      position: relative;
    }
  }
  @media (min-width: 600px) {
    .page-title {
      text-align: center;
      color: #2ef051;
      position: relative;
      width: fit-content;
      margin: 20px auto;
      user-select: none;
    }
    .page-title--mobile {
      display: none;
    }
    .page-title--details {
      text-align: center;
      color: #fff;
      position: relative;
      width: fit-content;
      margin: 20px auto;
      user-select: none;
    }
    .spot-title {
      display: none;
    }
    .login-title {
      text-align: center;
      color: #fff;
      width: 548px;
      height: 60px;
      left: calc(50% - 548px / 2 - 1px);
      top: calc(50% - 60px / 2 - 347px);
      font-style: normal;
      font-weight: normal;
      font-size: 48px;
      line-height: 60px;
    }
    .login-image {
      position: relative;
      top: 31px;
      width: 122px;
      height: 122px;
      transform: rotate(17.46deg);
      z-index: -1;
    }
    .filter-button {
      margin-bottom: 20px;
      transition: all 0.5s;
      font-family: "Sora", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
        Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      color: #fff;
      font-weight: 400;
      font-size: 20px;
      background: #171d34;
      border: 0px solid #2ef051;
      box-sizing: border-box;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      cursor: pointer;
      padding: 15px;
    }
    .filter-button:hover {
      background: #2ef051;
    }
    .register-image {
      position: relative;
      top: 31px;
      width: 122px;
      height: 122px;
      z-index: -1;
    }
  }
`;
export default StyledExplorePage;
