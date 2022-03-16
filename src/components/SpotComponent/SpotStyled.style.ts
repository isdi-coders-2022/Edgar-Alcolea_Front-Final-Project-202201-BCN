import styled from "styled-components";

const SpotStyled = styled.li`
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

  @media (min-width: 600px) {
    margin-bottom: 20px;
    width: 70vw;
    padding: 15px;
    background-color: #171d34;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid #171d34;
    cursor: pointer;

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
  }
`;

export default SpotStyled;
