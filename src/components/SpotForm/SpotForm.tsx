import { useState } from "react";
import SpotFormInterface from "../../types/SpotFormInterface";
import StyledForm from "./SpotForm.style";

interface SpotFormProps {
  submitData: (formData: SpotFormInterface) => void;
}

const SpotForm = ({ submitData }: SpotFormProps): JSX.Element => {
  const blankForm: SpotFormInterface = {
    name: "",
    description: "",
    coordinates: "",
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
        await setImgData({ ...imgData, imageDefault: reader.result });
      }
    };

    if (imageFileData[0]) {
      await reader.readAsDataURL(imageFileData[0]);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    submitData(formData);
  };

  return (
    <StyledForm>
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
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
              Add Spot!
            </button>
          </div>
        </div>
      </form>
    </StyledForm>
  );
};

export default SpotForm;
