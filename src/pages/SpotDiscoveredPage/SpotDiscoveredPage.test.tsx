import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store";
import SpotDiscoveredPage from "./SpotDiscoveredPage";

describe("Given a SpotDiscoveredPage component", () => {
  describe("When instantiated", () => {
    test("Then it should display a heading with Spot Discovered", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <SpotDiscoveredPage />
          </Provider>
        </BrowserRouter>
      );

      const title = screen.getByRole("heading", {
        name: /spot discovered/i,
      });
      expect(title).toBeInTheDocument();
    });
  });

  describe("When all input fields are filled", () => {
    test("Then the submit button shouldn't be disabled", () => {
      const onSubmit = jest.fn();
      const inputFields = [
        /name/i,
        /description/i,
        /location/i,
        /coordinates/i,
      ];
      const text = "hola";
      render(
        <BrowserRouter>
          <Provider store={store}>
            <SpotDiscoveredPage />
          </Provider>
        </BrowserRouter>
      );

      const fields = inputFields.map((label) =>
        screen.getByPlaceholderText(label)
      );
      fields.forEach((field) => userEvent.type(field, text));
      const button = screen.getByRole("button");

      expect(button).not.toBeDisabled();
    });
  });

  describe("When the user uploads a picture", () => {
    test("Then the picture preview should be visible", () => {
      const file: any = new File(["hello"], "hello.png", { type: "image/png" });

      render(
        <BrowserRouter>
          <Provider store={store}>
            <SpotDiscoveredPage />
          </Provider>
        </BrowserRouter>
      );

      const field = screen.getByLabelText(/image/i);
      userEvent.upload(field, file);
      const button = screen.getByRole("button");

      expect(button).toBeDisabled();
    });
  });
});
