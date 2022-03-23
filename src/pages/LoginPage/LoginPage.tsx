import { useState } from "react";
import { useDispatch } from "react-redux";

import { Link, NavigateFunction, useNavigate } from "react-router-dom";
import StyledForm from "../../components/SpotForm/StyledForm.style";
import { userLoginThunk } from "../../redux/thunks/usersThunk";
import { LoginFormInterface } from "../../types/LoginFormInterface";
import StyledLoginPage from "./StyledLoginPage.style";

const LoginPage = (): JSX.Element => {
  const navigate: NavigateFunction = useNavigate();
  const dispatch = useDispatch();
  const blankForm: LoginFormInterface = {
    username: "",
    password: "",
  };

  const resetForm = () => {
    setFormData(blankForm);
  };

  const [formData, setFormData] = useState(blankForm);

  const isFormInvalid: boolean =
    formData.username === "" || formData.password === "";

  const changeData = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();
    resetForm();
    await dispatch(userLoginThunk(formData));
    navigate("/");
  };

  return (
    <StyledLoginPage>
      <div className="title-container">
        <h1 className="login-title">Welcome to PK Spots !</h1>
        <img
          src="./pk.png"
          alt="Guy jumping over form"
          className="login-image"
        />
      </div>
      <StyledForm className="form-container">
        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
          <div className="form">
            <p>You can sign in</p>
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
            <div className="button-container">
              <button type="submit" disabled={isFormInvalid}>
                Login
              </button>
            </div>
            <p>
              Or create an account{" "}
              <Link className={"link"} to={"/register"}>
                here
              </Link>
            </p>
          </div>
        </form>
      </StyledForm>
    </StyledLoginPage>
  );
};
export default LoginPage;
