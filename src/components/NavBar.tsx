import NavBarStyled from "./NavBar.style";

const NavBar = (): JSX.Element => {
  return (
    <NavBarStyled>
      <ul>
        <li className="navigation__link">
          <p>Explore</p>
        </li>
        <li className="navigation__link">
          {" "}
          <p>My Spots</p>
        </li>
        <li className="navigation__link">
          {" "}
          <p>Spot Discovered</p>
        </li>
      </ul>
    </NavBarStyled>
  );
};

export default NavBar;
