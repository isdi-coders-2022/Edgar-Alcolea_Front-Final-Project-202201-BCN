import { screen, render } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { pkTheme } from "../pkTheme";
import store from "../redux/store";
import ExplorePage from "./ExplorePage";

describe("Given a ExplorePage component", () => {
  describe("When it gets rendered", () => {
    test('Then it should display a heading item with name "Welcome to PK Spots !"', () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <ThemeProvider theme={pkTheme}>
              <ExplorePage />
            </ThemeProvider>
          </BrowserRouter>
        </Provider>
      );

      const spotList = screen.getByRole("list");

      expect(spotList).toBeInTheDocument();
    });
  });
});
