import styled from "styled-components";

const StyledRegisterPage = styled.div`
  @media (max-width: 600px) {
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
      .register-image {
        position: relative;
        top: -20px;
        width: 122px;
        height: 122px;
        z-index: -1;
      }
    }
    .form-container {
      position: relative;
      top: -50px;
      .file-container {
        border-radius: ${(props) => props.theme.borderRadius};
        width: 150px;
        height: 120px;
        z-index: 2;
        img {
          object-fit: cover;
          height: 120px;
        }
      }
    }
  }
  @media (min-width: 600px) {
    .title-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      .login-title {
        margin-bottom: 0px;
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
      .register-image {
        position: relative;
        top: 31px;
        width: 122px;
        height: 122px;
        z-index: -1;
      }
    }
    .form-container {
      .file-container {
        border-radius: ${(props) => props.theme.borderRadius};
        width: 150px;
        height: 120px;
        z-index: 2;
        img {
          object-fit: cover;
          height: 120px;
        }
      }
    }
  }
`;
export default StyledRegisterPage;
