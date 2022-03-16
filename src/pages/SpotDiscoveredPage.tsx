import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import SpotForm from "../components/SpotForm/SpotForm";
import { createSpotThunk } from "../redux/thunks/spotsThunks";
import SpotFormInterface from "../types/SpotFormInterface";

const SpotDiscoveredPage = (): JSX.Element => {
  const blankForm: SpotFormInterface = {
    name: "",
    description: "",
    xCoordinate: 0,
    yCoordinate: 0,
    location: "",
    image: null,
  };

  const imageUrl: any = {
    imageDefault: "",
  };

  const [formData, setFormData] = useState(blankForm);
  const [imgData, setImgData] = useState(imageUrl);

  const isFormInvalid: boolean =
    formData.name === "" ||
    formData.description === "" ||
    formData.xCoordinate === 0 ||
    formData.yCoordinate === 0 ||
    formData.location === "";

  const changeData = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };

  const changeFile = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const imageFileData: any = event.target.files;
    setFormData({ ...formData, image: imageFileData[0] });
    const reader = new FileReader();
    reader.onload = async () => {
      if (reader.readyState === 2) {
        await setImgData({ ...imgData, imageDefault: reader.result });
      }
    };

    if (imageFileData[0]) {
      await reader.readAsDataURL(imageFileData[0]);
    }
  };
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const submitData = (event: React.FormEvent<HTMLFormElement>): void => {
    debugger;
    event.preventDefault();
    dispatch(createSpotThunk(formData));
    toast.success("Spot created!");
    navigate("/");
  };
  return (
    <>
      <h1 className="page-title">Spot Discovered</h1>
      <SpotForm
        submitData={submitData}
        changeData={changeData}
        changeFile={changeFile}
        imgData={imgData}
        formData={formData}
        isFormInvalid={isFormInvalid}
      />
    </>
  );
};

export default SpotDiscoveredPage;
