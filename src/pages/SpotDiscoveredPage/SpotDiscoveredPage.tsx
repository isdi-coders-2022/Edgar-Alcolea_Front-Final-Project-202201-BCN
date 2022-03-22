import SpotForm from "../../components/SpotForm/SpotForm";
import StyledSpotDiscoveredPage from "./StyledSpotDiscoveredPage.style";

const SpotDiscoveredPage = (): JSX.Element => {
  const emptyForm = {
    name: "",
    description: "",
    xCoordinate: 0,
    yCoordinate: 0,
    location: "",
    image: "",
    createdBy: {
      id: "",
      username: "",
    },
    id: "",
  };
  return (
    <StyledSpotDiscoveredPage>
      <h1 className="page-title">Spot Discovered</h1>
      <SpotForm isEdit={false} spotDetails={emptyForm} />
    </StyledSpotDiscoveredPage>
  );
};

export default SpotDiscoveredPage;
