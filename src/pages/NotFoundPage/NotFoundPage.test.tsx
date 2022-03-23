import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { pkTheme } from "../../pkTheme";
import store from "../../redux/store";
import NotFoundPage from "./NotFoundPage";

describe("Given a NotFoundPage component", () => {
  describe("When it gets rendered", () => {
    test('Then it should display a heading  with name "404 | Resource not found"', () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <ThemeProvider theme={pkTheme}>
              <NotFoundPage />
            </ThemeProvider>
          </BrowserRouter>
        </Provider>
      );

      const title = screen.getByRole("heading");

      expect(title).toBeInTheDocument();
    });
  });
});
