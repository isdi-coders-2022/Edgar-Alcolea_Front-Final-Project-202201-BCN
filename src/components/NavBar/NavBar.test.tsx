import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { pkTheme } from "../../pkTheme";
import store from "../../redux/store";
import NavBar from "./NavBar";

describe("Given a NavBar component", () => {
  describe("When it gets rendered", () => {
    test('Then it should display a list item with name "Explore"', () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <ThemeProvider theme={pkTheme}>
              <NavBar />
            </ThemeProvider>
          </BrowserRouter>
        </Provider>
      );

      const navbar = screen.getByRole("list", { name: "navbar" });

      expect(navbar).toBeInTheDocument();
    });
  });

  describe("When Burger component gets clicked", () => {
    test("Then it should change the state value isActive", () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <ThemeProvider theme={pkTheme}>
              <NavBar />
            </ThemeProvider>
          </BrowserRouter>
        </Provider>
      );

      const burger = screen.getByTitle(/burger/i);
      userEvent.click(burger);
      userEvent.click(burger);

      expect(burger).toBeInTheDocument();
    });
  });
});
