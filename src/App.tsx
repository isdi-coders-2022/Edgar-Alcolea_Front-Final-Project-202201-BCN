import { ThemeProvider } from "styled-components";
import ExplorePage from "./pages/ExplorePage";
import { pkTheme } from "./pkTheme";

function App() {
  return (
    <ThemeProvider theme={pkTheme}>
      <div className="container">
        <ExplorePage />
        <h1 className="login-title">Welcome to PK Spots !</h1>
      </div>
    </ThemeProvider>
  );
}

export default App;
