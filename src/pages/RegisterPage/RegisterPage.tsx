import { useState } from "react";
import { useDispatch } from "react-redux";

import { Link, useNavigate } from "react-router-dom";
import StyledForm from "../../components/SpotForm/SpotForm.style";
import registerUserThunk from "../../redux/thunks/usersThunk";
import { RegisterFormInterface } from "../../types/LoginFormInterface";

const RegisterPage = (): JSX.Element => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const blankForm: RegisterFormInterface = {
    username: "",
    password: "",
    name: "",
    bio: "",
    age: "",
    city: "",
    image: null,
  };

  const [formData, setFormData] = useState(blankForm);

  const isFormInvalid: boolean =
    formData.username === "" ||
    formData.password === "" ||
    formData.name === "" ||
    formData.age === null ||
    formData.bio === "" ||
    formData.city === "";

  const changeData = (event: React.ChangeEvent<HTMLInputElement>): void => {
    if (
      (event.target.id === "age" && +event.target.value > 99) ||
      +event.target.value < 0
    )
      return;

    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    dispatch(registerUserThunk(formData));
    navigate("/");
  };
  return (
    <>
      <div className="title-container">
        <h1 className="login-title">Welcome to PK Spots !</h1>
        <img
          src="./pk2.png"
          alt="Guy jumping over form"
          className="register-image"
        />
      </div>
      <StyledForm>
        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
          <div className="form">
            <div className="input-group">
              <label hidden={true} htmlFor="username">
                Username:
              </label>{" "}
              <input
                type="text"
                id="username"
                value={formData.username}
                onChange={changeData}
                placeholder={"Username:"}
              />
            </div>
            <div className="input-group">
              <label hidden={true} htmlFor="password">
                Password:
              </label>{" "}
              <input
                type="password"
                id="password"
                value={formData.password}
                onChange={changeData}
                placeholder={"Password:"}
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
              <label hidden={true} htmlFor="bio">
                Bio:
              </label>{" "}
              <input
                type="text"
                id="bio"
                value={formData.bio}
                onChange={changeData}
                placeholder={"Bio:"}
              />
            </div>
            <div className="input-group">
              <label hidden={true} htmlFor="age">
                Age:
              </label>{" "}
              <input
                type="number"
                id="age"
                value={formData.age}
                onChange={changeData}
                placeholder={"Age:"}
                min={16}
                max={99}
              />
            </div>
            <div className="input-group">
              <label hidden={true} htmlFor="city">
                City:
              </label>{" "}
              <input
                type="text"
                id="city"
                value={formData.city}
                onChange={changeData}
                placeholder={"City:"}
              />
            </div>
            <div className="button-container">
              <button type="submit" disabled={isFormInvalid}>
                Register
              </button>
            </div>
            <p>Already have an account?</p>
            <Link className={"link"} to={"/login"}>
              Sign in
            </Link>
          </div>
        </form>
      </StyledForm>
    </>
  );
};
export default RegisterPage;
