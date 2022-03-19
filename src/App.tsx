import { useEffect } from "react";
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
import { useAppSelector } from "./redux/hooks";
import { LoggedUserInterface } from "./types/UserInterface";

function App() {
  const loggedUser: LoggedUserInterface = useAppSelector((state) => state.user);
  const navigate: NavigateFunction = useNavigate();

  useEffect(() => {
    // eslint-disable-next-line no-restricted-globals
    if (!loggedUser.loggedIn && location.pathname !== "/register")
      navigate("/");
  }, [loggedUser.loggedIn, navigate]);

  return (
    <ThemeProvider theme={pkTheme}>
      <div className="container">
        {loggedUser.loggedIn && <NavBar />}
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/explore" element={<ExplorePage />} />
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
