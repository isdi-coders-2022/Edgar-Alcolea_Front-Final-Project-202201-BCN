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
              value={formData.xCoordinate}
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
