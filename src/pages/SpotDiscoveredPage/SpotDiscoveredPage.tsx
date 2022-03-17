import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import SpotForm from "../../components/SpotForm/SpotForm";
import { createSpotThunk } from "../../redux/thunks/spotsThunks";
import SpotFormInterface from "../../types/SpotFormInterface";

const SpotDiscoveredPage = (): JSX.Element => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const submitData = (formData: SpotFormInterface): void => {
    dispatch(createSpotThunk(formData));
    navigate("/");
  };

  return (
    <>
      <h1 className="page-title">Spot Discovered</h1>
      <SpotForm submitData={submitData} />
    </>
  );
};

export default SpotDiscoveredPage;
