import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { pkTheme } from "../../pkTheme";
import store from "../../redux/store";
import MySpotsPage from "./MySpotsPage";

describe("Given a ExplorePage component", () => {
  describe("When it gets rendered", () => {
    test("Then it should display a spot list", () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <ThemeProvider theme={pkTheme}>
              <MySpotsPage />
            </ThemeProvider>
          </BrowserRouter>
        </Provider>
      );

      const spotList = screen.getByRole("list");

      expect(spotList).toBeInTheDocument();
    });
  });
});
