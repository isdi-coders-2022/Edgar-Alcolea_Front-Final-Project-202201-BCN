import { screen, render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { pkTheme } from "../pkTheme";
import ExplorePage from "./ExplorePage";

describe("Given a ExplorePage component", () => {
  describe("When it gets rendered", () => {
    test('Then it should display a heading item with name "Welcome to PK Spots !"', () => {
      render(
        <BrowserRouter>
          <ThemeProvider theme={pkTheme}>
            <ExplorePage />
          </ThemeProvider>
        </BrowserRouter>
      );

      const title = screen.getByRole("heading", {
        name: /welcome to pk spots !/i,
      });

      expect(title).toBeInTheDocument();
    });
  });
});
