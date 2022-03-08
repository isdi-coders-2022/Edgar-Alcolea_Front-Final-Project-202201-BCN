import styled from "styled-components";

const NavBarStyled = styled.div`
  background-color: #171d34;
  height: 73px;
  display: flex;
  align-items: center;

  ul {
    margin: 0px;
    list-style: none;
    display: flex;
    color: #2ef051;
    align-items: center;
    height: inherit;
    padding: 0px;
  }

  .navigation__link {
    cursor: pointer;
    box-sizing: border-box;
    font-size: 18px;
    height: 100%;
    p {
      margin: 0px;
      line-height: 73px;
      padding: 0 20px;
    }
    &:hover {
      border: 1px solid #2ef051;
    }
  }
`;

export default NavBarStyled;