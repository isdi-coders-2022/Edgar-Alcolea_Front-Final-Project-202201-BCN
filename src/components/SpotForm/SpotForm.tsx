import StyledForm from "./SpotForm.style";

interface SpotFormProps {
  submitData: (event: React.FormEvent<HTMLFormElement>) => void;
  changeFile: (event: React.ChangeEvent<HTMLInputElement>) => void;
  changeData: (event: React.ChangeEvent<HTMLInputElement>) => void;
  imgData: any;
  formData: any;
  isFormInvalid: boolean;
}

const SpotForm = ({
  submitData,
  changeFile,
  changeData,
  imgData,
  formData,
  isFormInvalid,
}: SpotFormProps): JSX.Element => {
  return (
    <StyledForm>
      <form noValidate autoComplete="off" onSubmit={submitData}>
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
            <label htmlFor="name">Name:</label>{" "}
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={changeData}
            />
          </div>
          <div className="input-group">
            <label htmlFor="description">Description:</label>{" "}
            <input
              type="text"
              id="description"
              value={formData.description}
              onChange={changeData}
            />
          </div>
          <div className="input-group">
            <label htmlFor="location">Location:</label>{" "}
            <input
              type="text"
              id="location"
              value={formData.location}
              onChange={changeData}
            />
          </div>
          <div className="input-group">
            <label htmlFor="xCoordinate">X Coordinate:</label>{" "}
            <input
              type="text"
              id="xCoordinate"
              value={formData.xCoordinate}
              onChange={changeData}
            />
          </div>
          <div className="input-group">
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
              Add Spot!
            </button>
          </div>
        </div>
      </form>
    </StyledForm>
  );
};

export default SpotForm;
