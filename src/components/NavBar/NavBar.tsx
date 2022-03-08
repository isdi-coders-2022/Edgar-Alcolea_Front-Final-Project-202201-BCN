import { Link } from "react-router-dom";
import NavBarStyled from "./NavBarStyled.style";

const NavBar = (): JSX.Element => {
  return (
    <NavBarStyled>
      <ul>
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
  );
};

export default NavBar;
