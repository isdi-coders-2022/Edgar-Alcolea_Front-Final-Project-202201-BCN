import { useState } from "react";
import { Link, useParams, useResolvedPath } from "react-router-dom";
import Burger from "../Burger/Burger";
import SideMenu from "../SideMenu/SideMenu";
import NavBarStyled from "./NavBarStyled.style";

const NavBar = (): JSX.Element => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const toggleBurger = () => {
    setIsActive(isActive ? false : true);
  };

  return (
    <>
      <SideMenu isActive={isActive} />
      <NavBarStyled>
        <Burger isActive={isActive} actionOnClick={toggleBurger} />
        <ul title="navbar">
          <Link to="/explore" className="navigation__link">
            <p>Explore</p>
          </Link>
          <Link to="/my-spots" className="navigation__link">
            <p>My Spots</p>
          </Link>
          <Link to="/spot-discovered" className="navigation__link">
            <p>Spot Discovered</p>
          </Link>
        </ul>
      </NavBarStyled>
    </>
  );
};

export default NavBar;
