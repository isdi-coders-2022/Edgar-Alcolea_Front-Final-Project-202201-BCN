import styled from "styled-components";

const StyledNotFoundPage = styled.div`
  @media (max-width: 600px) {
    margin: 0 auto;
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
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
      font-size: 25px;
      line-height: 60px;
    }
  }
  @media (min-width: 600px) {
    margin: 0 auto;
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
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
      font-size: 40px;
      line-height: 60px;
    }
  }
`;

export default StyledNotFoundPage;
