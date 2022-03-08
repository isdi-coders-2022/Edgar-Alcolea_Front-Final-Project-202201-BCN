const NavBar = (): JSX.Element => {
  return (
    <div className="navigation">
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
    </div>
  );
};

export default NavBar;
