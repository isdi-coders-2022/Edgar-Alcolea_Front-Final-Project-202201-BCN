import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../redux/hooks";
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

  const [formData, setFormData] = useState(blankForm);

  const isFormInvalid: boolean =
    formData.name === "" ||
    formData.description === "" ||
    formData.xCoordinate === null ||
    formData.yCoordinate === null ||
    formData.location === "";

  const changeData = (event: any): void => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };

  const navigate = useNavigate();

  const submitData = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    navigate("/explore");
  };

  const dispatch = useAppDispatch();

  return (
    <>
      <h1 className="page-title">Spot Discovered</h1>
      <div className="form-container">
        <form noValidate autoComplete="off" onSubmit={submitData}>
          <div className="form">
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
