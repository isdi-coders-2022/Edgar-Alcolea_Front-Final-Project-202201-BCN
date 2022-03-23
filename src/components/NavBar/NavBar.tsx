import { useState } from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";
import Burger from "../Burger/Burger";
import Profile from "../Profile/Profile";
import SideMenu from "../SideMenu/SideMenu";
import NavBarStyled from "./NavBarStyled.style";

const NavBar = (): JSX.Element => {
  const loggedUser = useAppSelector((state) => state.user);
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
          <Link to="/" className="navigation__link">
            <p>Explore</p>
          </Link>
          <Link to="/my-spots" className="navigation__link">
            <p>My Spots</p>
          </Link>
          <Link to="/spot-discovered" className="navigation__link">
            <p>Spot Discovered</p>
          </Link>
          <Link
            to={`/profile/${loggedUser.id}`}
            className="navigation__link--profile"
          >
            <Profile />
          </Link>
        </ul>
        <div
          className={`${isActive ? "disabler active" : "disabler"}`}
          onClick={toggleBurger}
        ></div>
      </NavBarStyled>
    </>
  );
};

export default NavBar;
