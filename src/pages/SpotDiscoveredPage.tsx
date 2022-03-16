import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SpotFormInterface from "../types/SpotFormInterface";

const SpotDiscoveredPage = (): JSX.Element => {
  const blankForm: SpotFormInterface = {
    name: "",
    description: "",
    xCoordinate: undefined,
    yCoordinate: undefined,
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
    formData.xCoordinate === null ||
    formData.yCoordinate === null ||
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

  const submitData = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    navigate("/explore");
  };
  return (
    <>
      <h1 className="page-title">Spot Discovered</h1>
      <div className="form-container">
        <form noValidate autoComplete="off" onSubmit={submitData}>
          <div className="form">
            <div className="file-container">
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
            <label htmlFor="name">Name:</label>{" "}
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={changeData}
            />
            <label htmlFor="description">Description:</label>{" "}
            <input
              type="text"
              id="description"
              value={formData.description}
              onChange={changeData}
            />
            <label htmlFor="location">Location:</label>{" "}
            <input
              type="text"
              id="location"
              value={formData.location}
              onChange={changeData}
            />
            <label htmlFor="xCoordinate">X Coordinate:</label>{" "}
            <input
              type="text"
              id="xCoordinate"
              value={formData.xCoordinate}
              onChange={changeData}
            />
            <label htmlFor="yCoordinate">Y Coordinate:</label>{" "}
            <input
              type="text"
              id="yCoordinate"
              value={formData.yCoordinate}
              onChange={changeData}
            />
          </div>
          <div className="button-container">
            <button type="submit" disabled={isFormInvalid}>
              Create!
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default SpotDiscoveredPage;
