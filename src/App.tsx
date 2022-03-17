import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "styled-components";
import NavBar from "./components/NavBar/NavBar";
import ExplorePage from "./pages/ExplorePage/ExplorePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import MySpotsPage from "./pages/MySpotsPage/MySpotsPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import SpotDiscoveredPage from "./pages/SpotDiscoveredPage/SpotDiscoveredPage";
import { pkTheme } from "./pkTheme";

function App() {
  return (
    <ThemeProvider theme={pkTheme}>
      <div className="container">
        <NavBar />
        <Routes>
          <Route path="/" element={<ExplorePage />} />
          <Route path="/my-spots" element={<MySpotsPage />} />
          <Route path="/spot-discovered" element={<SpotDiscoveredPage />} />
          <Route path="/login" element={<LoginPage />} />
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
