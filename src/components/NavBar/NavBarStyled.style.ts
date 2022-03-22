import styled from "styled-components";

const NavBarStyled = styled.div`
  @media (max-width: 600px) {
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
      margin-left: auto;
    }
    .disabler.active {
      position: absolute;
      top: 73px;
      left: 0px;
      width: 100vw;
      height: 100vh;
      z-index: 1;
    }
    .navigation__link {
      display: none;
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
    .navigation__link--profile {
      cursor: pointer;
      box-sizing: border-box;
      font-size: 18px;

      color: inherit;
      text-decoration: none;

      margin-left: auto;
    }
  }
  @media (min-width: 600px) {
    background-color: ${(props) => props.theme.colors.secondary};
    height: 73px;
    display: flex;
    align-items: center;

    ul {
      width: 100%;
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

    .navigation__link--profile {
      cursor: pointer;
      box-sizing: border-box;
      font-size: 18px;
      height: 100%;
      color: inherit;
      text-decoration: none;
      border: 1px solid #171d34;
      margin-left: auto;
    }
  }
`;

export default NavBarStyled;
