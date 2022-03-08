import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { pkTheme } from "../../pkTheme";
import NavBar from "./NavBar";

describe("Given a NavBar component", () => {
  describe("When it gets rendered", () => {
    test('Then it should display a list item with name "Explore"', () => {
      render(
        <BrowserRouter>
          <ThemeProvider theme={pkTheme}>
            <NavBar />
          </ThemeProvider>
        </BrowserRouter>
      );

      const link = screen.getByRole("list");

      expect(link).toBeInTheDocument();
    });
  });
});
