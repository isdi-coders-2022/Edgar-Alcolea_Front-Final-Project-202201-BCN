const ExplorePage = (): JSX.Element => {
  return (
    <>
      <h1 className="login-title">Welcome to PK Spots !</h1>
      <ul className="spot-list">
        <li className="spot-container">
          <img
            className="spot-image"
            src="https://images.squarespace-cdn.com/content/v1/59b30729ccc5c5736a2325c1/1517258406485-RVEAFZDOHK6LYIW42PM3/DSC08963+%281%29.jpg?format=1000w"
            alt="test"
          />

          <p className="spot-name">Test</p>

          <div className="spot-info">
            {" "}
            <div className="times-marked">
              <svg
                width="32"
                height="26"
                viewBox="0 0 32 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.2249 2.60012C15.0128 1.38058 16.7967 1.38058 17.5847 2.60011L23.6578 12L29.4174 20.9147C30.2772 22.2454 29.3219 24 27.7375 24H15.9048H4.07206C2.48767 24 1.53237 22.2454 2.39217 20.9147L8.15177 12L14.2249 2.60012Z"
                  stroke="#BA1A97"
                  stroke-width="3"
                />
              </svg>
              <p>x 2</p>
            </div>
            <p className="spot-location">Here</p>
          </div>
        </li>
      </ul>
    </>
  );
};

export default ExplorePage;
