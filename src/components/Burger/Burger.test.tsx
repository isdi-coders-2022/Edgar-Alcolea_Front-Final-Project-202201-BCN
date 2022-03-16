import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ThemeProvider } from "styled-components";
import { pkTheme } from "../../pkTheme";
import Burger from "./Burger";

describe("Given a Burger component", () => {
  describe("When it gets rendered", () => {
    test("Then it should display a span", () => {
      const action = jest.fn();
      render(
        <ThemeProvider theme={pkTheme}>
          <Burger isActive={false} actionOnClick={action} />
        </ThemeProvider>
      );

      const burger = screen.getByTitle(/burger/i);

      expect(burger).toBeInTheDocument();
    });
  });

  describe("When it gets clicked", () => {
    test("Then it should call the function received by props", async () => {
      const action = jest.fn();
      render(
        <ThemeProvider theme={pkTheme}>
          <Burger isActive={false} actionOnClick={action} />
        </ThemeProvider>
      );

      const burger = screen.getByTitle(/burger/i);
      userEvent.click(burger);

      expect(action).toHaveBeenCalled();
    });
  });

  describe("When it receives prop isActive: true", () => {
    test("Then it should have className active", async () => {
      const action = jest.fn();
      const expectedClass = "active";
      render(
        <ThemeProvider theme={pkTheme}>
          <Burger isActive={true} actionOnClick={action} />
        </ThemeProvider>
      );

      const burger = screen.getByTitle(/burger/i);

      expect(burger.className).toContain(expectedClass);
    });
  });
});
