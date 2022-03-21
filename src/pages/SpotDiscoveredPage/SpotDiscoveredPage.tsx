import SpotForm from "../../components/SpotForm/SpotForm";

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
    <>
      <h1 className="page-title">Spot Discovered</h1>
      <SpotForm isEdit={false} spotDetails={emptyForm} />
    </>
  );
};

export default SpotDiscoveredPage;
