import { Link } from "react-router-dom";
import styled from "styled-components";

const SideMenuStyled = styled.div`
  @media (max-width: 600px) {
    background-color: ${(props) => props.theme.colors.secondary};
    height: fit-content;
    position: fixed;
    top: 73px;
    left: -200px;
    transition: all 0.25s;
    transition-timing-function: ease-in-out;
    z-index: 20;
    &.active {
      left: 0px;
      position: absolute;
    }
    ul {
      margin: 0px;
      list-style: none;
      display: flex;
      flex-direction: column;
      color: ${(props) => props.theme.colors.primary};
      align-items: center;
      height: inherit;
      padding: 0px;
    }
    .navigation__link {
      cursor: pointer;
      width: 100%;
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
  @media (min-width: 600px) {
    display: none;
  }
`;

interface SideMenuProps {
  isActive: boolean;
}

const SideMenu = ({ isActive }: SideMenuProps): JSX.Element => {
  return (
    <SideMenuStyled className={`${isActive ? " active" : ""}`} title="sideMenu">
      <ul>
        <Link to="/" className="navigation__link">
          <p>Explore</p>
        </Link>

        <Link to="/my-spots" className="navigation__link">
          <p>My Spots</p>
        </Link>
        <Link to="/spot-discovered" className="navigation__link">
          <p>Spot Discovered</p>
        </Link>
      </ul>
    </SideMenuStyled>
  );
};
export default SideMenu;
