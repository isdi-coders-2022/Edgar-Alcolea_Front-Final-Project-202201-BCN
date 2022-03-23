import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";
import {
  createSpotThunk,
  updateSpotThunk,
} from "../../redux/thunks/spotsThunks";
import SpotFormInterface from "../../types/SpotFormInterface";
import { SpotInterface } from "../../types/SpotInterface";
import StyledForm from "./StyledForm.style";

interface SpotFormProps {
  spotDetails: SpotInterface;
  isEdit: boolean;
}

const SpotForm = ({ spotDetails, isEdit }: SpotFormProps): JSX.Element => {
  const { id } = useAppSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  let blankForm: SpotFormInterface;

  if (!isEdit) {
    blankForm = {
      name: "",
      description: "",
      coordinates: "",
      location: "",
      image: null,
      createdBy: id,
    };
  } else {
    blankForm = {
      name: spotDetails.name,
      description: spotDetails.description,
      coordinates: `${spotDetails.xCoordinate}, ${spotDetails.yCoordinate}`,
      location: spotDetails.location,
      image: null,
      id: spotDetails.id,
    };
  }
  const imageUrl: any = {
    imageDefault: !isEdit ? "" : spotDetails.image,
  };

  const [formData, setFormData] = useState(blankForm);
  const [imgData, setImgData] = useState(imageUrl);

  const isFormInvalid: boolean =
    formData.name === "" ||
    formData.description === "" ||
    formData.coordinates === "" ||
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
        setImgData({ ...imgData, imageDefault: reader.result });
      }
    };

    if (imageFileData[0]) {
      reader.readAsDataURL(imageFileData[0]);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    dispatch(createSpotThunk(formData));
    setTimeout(() => navigate("/"), 3000);
  };

  const handleEditSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    dispatch(updateSpotThunk(formData));
    setTimeout(() => navigate("/"), 3000);
  };

  return (
    <StyledForm className="details-form-container">
      <form
        noValidate
        autoComplete="off"
        onSubmit={isEdit ? handleEditSubmit : handleSubmit}
      >
        <div className="form">
          <div className="file-container">
            <label htmlFor="file" className="image-label">
              Image
            </label>{" "}
            <input type="file" id="file" onChange={changeFile} />
            <img
              className={!imgData.imageDefault ? "hidden" : "image-preview"}
              src={imgData.imageDefault}
              alt="preview"
            />
            <img
              className={imgData.imageDefault ? "hidden" : "upload-icon"}
              src="upload.png"
              alt="upload"
            />
          </div>
          <div className="input-group">
            <label hidden={true} htmlFor="name">
              Name:
            </label>{" "}
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={changeData}
              placeholder={"Name:"}
            />
          </div>
          <div className="input-group">
            <label hidden={true} htmlFor="description">
              Description:
            </label>{" "}
            <input
              type="text"
              id="description"
              value={formData.description}
              onChange={changeData}
              placeholder={"Description:"}
            />
          </div>
          <div className="input-group">
            <label htmlFor="description" hidden={true}>
              {" "}
              Location:
            </label>
            <input
              type="text"
              id="location"
              value={formData.location}
              onChange={changeData}
              placeholder={"Location:"}
            />
          </div>
          <div className="input-group">
            <label hidden={true} htmlFor="coordinates">
              {"Paste the spot coordinates here (x , y):"}
            </label>{" "}
            <input
              type="text"
              id="coordinates"
              value={formData.coordinates}
              onChange={changeData}
              placeholder={"Paste the spot coordinates here (x , y):"}
            />
          </div>
          <div className="button-container">
            <button type="submit" disabled={isFormInvalid}>
              {isEdit ? "Update Spot!" : "Add Spot!"}
            </button>
          </div>
        </div>
      </form>
    </StyledForm>
  );
};

export default SpotForm;
