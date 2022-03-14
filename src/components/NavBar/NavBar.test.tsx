import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
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

      const navbar = screen.getByRole("list", { name: "navbar" });

      expect(navbar).toBeInTheDocument();
    });
  });

  describe("When Burger component gets clicked", () => {
    test("Then it should change the state value isActive", () => {
      render(
        <BrowserRouter>
          <ThemeProvider theme={pkTheme}>
            <NavBar />
          </ThemeProvider>
        </BrowserRouter>
      );

      const burger = screen.getByTitle(/burger/i);
      userEvent.click(burger);
      userEvent.click(burger);

      expect(burger).toBeInTheDocument();
    });
  });
});
