import styled from "styled-components";

const StyledForm = styled.div`
  @media (max-width: 600px) {
    margin: 0 auto;
    position: relative;
    background-color: #171d34;
    width: 95%;
    border-radius: 15px;
    .link {
      text-decoration: none;
      color: #2ef051;
    }
    .form {
      display: flex;
      flex-direction: column;
      align-items: center;
      color: #fff;
      padding: 20px;
      font-size: 16px;

      .input-group {
        display: flex;
        flex-direction: column;
        align-items: center;
        min-width: 80%;
        input {
          width: 100%;
          height: 40px;
          padding: 14px 16px;
          background-color: #111927;
          border-radius: 15px;
          border: 0px solid red;
          margin: 10px 0px;
          color: #70757d;
          font-size: 16px;

          font-family: "Sora", -apple-system, BlinkMacSystemFont, "Segoe UI",
            Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          ::placeholder {
            color: #70757d;
            font-size: 18px;
            pointer-events: none;
            font-family: "Sora", -apple-system, BlinkMacSystemFont, "Segoe UI",
              Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue",
              sans-serif;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }
        }
      }
      .image-label {
        opacity: 0;
        position: absolute;
      }
      .file-container {
        height: 150px;
        border: 4px dashed #2ef051;
        color: #111927;
        width: 90%;
        border-radius: 15px;
        margin-bottom: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        input {
          width: 100%;
          cursor: pointer;
          height: inherit;
          z-index: 10;
          opacity: 0;
          margin: 0px;
          padding: 0px;
        }
      }

      .upload-icon {
        margin: 20px auto;
        height: 60%;
        color: #111927;
        position: absolute;
      }
      .hidden {
        display: none;
      }
      .image-preview {
        border-radius: 11px;
        width: 100%;
        height: 100%;
        object-fit: cover;
        position: absolute;
      }
      .button-container {
        display: flex;
        justify-content: center;
        button {
          transition: all 0.5s;
          font-family: "Sora", -apple-system, BlinkMacSystemFont, "Segoe UI",
            Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          color: #fff;
          font-weight: 400;
          font-size: 20px;
          background: #2ef051;
          border: 0px solid #2ef051;
          box-sizing: border-box;
          box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
          cursor: pointer;
          padding: 15px;
          margin: 15px;
          &:disabled {
            background: #171d34;
          }
        }
      }
    }
  }
  @media (min-width: 600px) {
    margin: 0 auto;
    background-color: #171d34;
    width: 60%;
    border-radius: 15px;
    .link {
      text-decoration: none;
      color: #2ef051;
    }
    .form {
      display: flex;
      flex-direction: column;
      align-items: center;
      color: #fff;
      padding: 20px;
      font-size: 16px;
      margin-bottom: 20px;

      .input-group {
        display: flex;
        flex-direction: column;
        align-items: center;
        min-width: 80%;
        input {
          font-size: 18px;
          width: 100%;
          height: 40px;
          padding: 14px 16px;
          background-color: #111927;
          border-radius: 15px;
          border: 0px solid red;
          margin: 10px 0px;
          color: #70757d;

          ::placeholder {
            color: #70757d;
            font-size: 18px;
            pointer-events: none;
            font-family: "Sora", -apple-system, BlinkMacSystemFont, "Segoe UI",
              Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue",
              sans-serif;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }
        }
      }
    }
    .image-label {
      opacity: 0;
      position: absolute;
    }
    .file-container {
      height: 150px;
      border: 4px dashed #2ef051;
      color: #111927;
      width: 90%;
      border-radius: 15px;
      margin-bottom: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      input {
        width: 100%;
        cursor: pointer;
        height: inherit;
        z-index: 10;
        opacity: 0;
        margin: 0px;
        padding: 0px;
      }
    }

    .upload-icon {
      margin: 20px auto;
      height: 60%;
      color: #111927;
      position: absolute;
    }
    .hidden {
      display: none;
    }
    .image-preview {
      border-radius: 11px;
      width: 100%;
      height: 100%;
      object-fit: cover;
      position: absolute;
    }
    .button-container {
      display: flex;
      justify-content: center;
      button {
        transition: all 0.5s;
        font-family: "Sora", -apple-system, BlinkMacSystemFont, "Segoe UI",
          Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #fff;
        font-weight: 400;
        font-size: 20px;
        background: #2ef051;
        border: 0px solid #2ef051;
        box-sizing: border-box;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        cursor: pointer;
        padding: 15px;
        margin: 15px;
        &:disabled {
          background: #171d34;
        }
      }
    }
  }
`;
export default StyledForm;
