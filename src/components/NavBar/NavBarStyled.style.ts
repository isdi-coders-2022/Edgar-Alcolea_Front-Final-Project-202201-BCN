import styled from "styled-components";

const NavBarStyled = styled.div`
  background-color: ${(props) => props.theme.colors.secondary};
  height: 73px;
  display: flex;
  align-items: center;

  ul {
    margin: 0px;
    list-style: none;
    display: flex;
    color: ${(props) => props.theme.colors.primary};
    align-items: center;
    height: inherit;
    padding: 0px;
  }

  .navigation__link {
    cursor: pointer;
    box-sizing: border-box;
    font-size: 18px;
    height: 100%;
    color: inherit;
    text-decoration: none;
    border: 1px solid #171d34;
    p {
      margin: 0px;
      line-height: 73px;
      padding: 0 20px;
    }
    &:hover {
      border: 1px solid #2ef051;
    }
  }

  @media screen and (min-width: 1200px) {
    background-color: ${(props) => props.theme.colors.secondary};
    height: 73px;
    display: flex;
    align-items: center;

    ul {
      margin: 0px;
      list-style: none;
      display: flex;
      color: ${(props) => props.theme.colors.primary};
      align-items: center;
      height: inherit;
      padding: 0px;
    }

    .navigation__link {
      cursor: pointer;
      box-sizing: border-box;
      font-size: 18px;
      height: 100%;
      color: inherit;
      text-decoration: none;
      border: 1px solid #171d34;
      p {
        margin: 0px;
        line-height: 73px;
        padding: 0 20px;
      }
      &:hover {
        border: 1px solid #2ef051;
      }
    }
  }
`;

export default NavBarStyled;
