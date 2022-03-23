import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { pkTheme } from "../../pkTheme";
import store from "../../redux/store";
import RegisterPage from "./RegisterPage";

describe("Given a RegisterPage component", () => {
  describe("When its rendered", () => {
    test("Then it should display a register form", () => {
      render(
        <ThemeProvider theme={pkTheme}>
          <BrowserRouter>
            <Provider store={store}>
              <RegisterPage />
            </Provider>
          </BrowserRouter>
        </ThemeProvider>
      );

      const element = screen.getByRole("link");

      expect(element).toBeInTheDocument();
    });
  });

  describe("When the user types in every input", () => {
    test("Then the register button should be enabled", () => {
      const expectedFields = [
        /username/i,
        /password/i,
        /^name/i,
        /^age/i,
        /bio/i,
        /city/i,
      ];

      render(
        <ThemeProvider theme={pkTheme}>
          <BrowserRouter>
            <Provider store={store}>
              <RegisterPage />
            </Provider>
          </BrowserRouter>
        </ThemeProvider>
      );

      const fields = expectedFields.map((label) =>
        screen.getByLabelText(label)
      );
      const button = screen.getByRole("button");
      fields.forEach((field) => userEvent.type(field, "1234"));

      expect(fields[0]).toBeInTheDocument();
      expect(button).not.toBeDisabled();
    });
  });

  describe("When the user clicks on Register", () => {
    test("Then the app should navigate to LoginPage", () => {
      const expectedFields = [
        /username/i,
        /password/i,
        /^name/i,
        /^age/i,
        /bio/i,
        /city/i,
      ];

      render(
        <ThemeProvider theme={pkTheme}>
          <BrowserRouter>
            <Provider store={store}>
              <RegisterPage />
            </Provider>
          </BrowserRouter>
        </ThemeProvider>
      );

      const fields = expectedFields.map((label) =>
        screen.getByLabelText(label)
      );
      const button = screen.getByRole("button");
      fields.forEach((field) => userEvent.type(field, "1234"));
      userEvent.click(button);
      expect(fields[0]).toBeInTheDocument();
      expect(button).not.toBeDisabled();
    });
  });
});
