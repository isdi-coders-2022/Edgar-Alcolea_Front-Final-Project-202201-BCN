import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "styled-components";
import NavBar from "./components/NavBar/NavBar";
import ExplorePage from "./pages/ExplorePage/ExplorePage";
import MySpotsPage from "./pages/MySpotsPage/MySpotsPage";
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
