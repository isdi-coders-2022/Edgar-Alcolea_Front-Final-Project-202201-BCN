import jwtDecode from "jwt-decode";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { NavigateFunction, Route, Routes, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "styled-components";
import NavBar from "./components/NavBar/NavBar";
import ExplorePage from "./pages/ExplorePage/ExplorePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import MySpotsPage from "./pages/MySpotsPage/MySpotsPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import SpotDiscoveredPage from "./pages/SpotDiscoveredPage/SpotDiscoveredPage";
import { pkTheme } from "./pkTheme";
import { loginUserAction } from "./redux/actions/actionCreators";
import { useAppSelector } from "./redux/hooks";
import { LoggedUserInterface } from "./types/UserInterface";

function App() {
  const loggedUser: LoggedUserInterface = useAppSelector((state) => state.user);
  const navigate: NavigateFunction = useNavigate();
  const dispatch = useDispatch();

  const token = localStorage.getItem("token");
  useEffect(() => {
    if (
      !token &&
      window.location.pathname !== "/register" &&
      window.location.pathname !== "/login"
    ) {
      navigate("/login");
      return;
    }
    if (token) {
      const userData: LoggedUserInterface = jwtDecode(token);
      dispatch(loginUserAction(userData));
    }
  }, [dispatch, navigate]);

  return (
    <ThemeProvider theme={pkTheme}>
      <div className="container">
        {token && <NavBar />}
        <Routes>
          <Route path="/" element={<ExplorePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/my-spots" element={<MySpotsPage />} />
          <Route path="/spot-discovered" element={<SpotDiscoveredPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </div>
      <ToastContainer
        theme="dark"
        pauseOnFocusLoss={false}
        pauseOnHover={false}
      />
    </ThemeProvider>
  );
}

export default App;
