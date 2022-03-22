import styled from "styled-components";

const StyledLoginPage = styled.div`
  @media (max-width: 600px) {
    p {
      font-size: 18px;
    }
    .title-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      .login-title {
        color: #fff;
        height: 60px;
        left: calc(50% - 548px / 2 - 1px);
        top: calc(50% - 60px / 2 - 347px);
        font-style: normal;
        font-weight: normal;
        padding: 10px;
        margin-bottom: 0px;
        font-size: 26px;
        line-height: 60px;
      }
      .login-image {
        top: -10px;
        width: 122px;
        height: 122px;
        transform: rotate(17.46deg);
        z-index: -1;
      }
    }
    .form-container {
      position: relative;
      top: -31px;
    }
  }
  @media (min-width: 600px) {
    p {
      font-size: 18px;
    }
    .title-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
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
    }
  }
`;
export default StyledLoginPage;
