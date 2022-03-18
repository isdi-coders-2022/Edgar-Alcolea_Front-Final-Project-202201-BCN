import styled from "styled-components";

const SpotStyled = styled.li`
  .spot-container {
    width: 335px;
    margin-bottom: 20px;
    padding: 15px;
    background-color: #171d34;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid #171d34;
    cursor: pointer;
  }
  .delete-button--desktop {
    display: none;
  }
  :hover {
    border: 1px solid #2ef051;
  }

  .spot-image {
    width: inherit;
    height: 178px;
    object-fit: cover;
    border-radius: 15px;
  }
  .times-marked {
    display: flex;
    align-items: center;
    color: #fff;
  }
  .times-marked p {
    font-size: 20px;
    margin-left: 5px;
  }
  .spot-name {
    color: #fff;
    font-size: 24px;
  }
  .spot-location {
    font-size: 20px;
    color: #2ef051;
  }

  .spot-info {
    width: inherit;
    display: flex;
    justify-content: space-around;
  }
  .spot-info--desktop {
    display: none;
  }
  .spot-created {
    display: none;
  }
  @media (min-width: 600px) {
    width: 70vw;
    margin-bottom: 20px;
    padding: 15px;
    background-color: #171d34;
    border-radius: 15px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    border: 1px solid #171d34;
    cursor: pointer;
    .delete-button {
      display: none;
    }
    .delete-button--desktop {
      display: block;
      position: relative;
      top: 0px;
      right: 10px;
    }
    .spot-container {
      width: 50%;
    }
    p {
      color: #fff;
    }
    :hover {
      border: 1px solid #2ef051;
    }

    .spot-image {
      width: 100%;
      object-fit: cover;
      border-radius: 15px;
    }

    .times-marked {
      display: flex;
      align-items: center;
      color: #fff;
    }
    .times-marked p {
      font-size: 20px;
      margin-left: 5px;
    }
    .spot-name {
      color: #fff;
      font-size: 24px;
      display: none;
    }
    .spot-name--desktop {
      color: #fff;
      font-size: 24px;
      margin: 0px;
    }
    .spot-location {
      font-size: 20px;
      color: #2ef051;
      display: none;
    }
    .spot-location--desktop {
      font-size: 20px;
      color: #2ef051;
    }
    .spot-created {
      display: block;
    }
    .spot-info {
      width: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      span {
        font-size: 15px;
        color: #2ef051;
      }
    }
    .spot-info--desktop {
      width: 50%;
      height: 100%;
      padding: 15px;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
    }
  }
`;

export default SpotStyled;
