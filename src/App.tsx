import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import NavBar from "./components/NavBar/NavBar";

import ExplorePage from "./pages/ExplorePage";
import SpotDiscoveredPage from "./pages/SpotDiscoveredPage";
import { pkTheme } from "./pkTheme";

function App() {
  return (
    <ThemeProvider theme={pkTheme}>
      <div className="container">
        <NavBar />
        <Routes>
          <Route path="/" element={<ExplorePage />} />
          <Route path="/my-spots" />
          <Route path="/spot-discovered" element={<SpotDiscoveredPage />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
