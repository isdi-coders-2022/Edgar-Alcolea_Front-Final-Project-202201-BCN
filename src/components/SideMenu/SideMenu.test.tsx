import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { pkTheme } from "../../pkTheme";
import SideMenu from "./SideMenu";

describe("Given a Burger component", () => {
  describe("When it gets rendered", () => {
    test("Then it should display a span", () => {
      render(
        <BrowserRouter>
          <ThemeProvider theme={pkTheme}>
            <SideMenu isActive={false} />
          </ThemeProvider>
        </BrowserRouter>
      );

      const link = screen.getByRole("link", { name: /explore/i });
      expect(link).toBeInTheDocument();
    });
  });

  describe("When it receives prop isActive: true", () => {
    test("Then it should have className active", async () => {
      const expectedClass = "active";
      render(
        <BrowserRouter>
          <ThemeProvider theme={pkTheme}>
            <SideMenu isActive={true} />
          </ThemeProvider>
        </BrowserRouter>
      );

      const menu = screen.getByTitle(/sidemenu/i);

      expect(menu.className).toContain(expectedClass);
    });
  });
});
