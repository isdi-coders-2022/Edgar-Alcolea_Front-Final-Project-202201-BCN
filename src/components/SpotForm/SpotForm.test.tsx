import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SpotForm from "./SpotForm";

describe("Given a SpotForm component", () => {
  describe("When it receives imgData", () => {
    test("Then it should hide upload image", () => {
      const submitData = jest.fn();
      const changeData = jest.fn();
      const changeFile = jest.fn();
      const formData = {};
      const isFormInvalid = true;
      const imgData = {
        imageDefault: "hello",
      };

      render(
        <SpotForm
          submitData={submitData}
          changeData={changeData}
          changeFile={changeFile}
          formData={formData}
          isFormInvalid={isFormInvalid}
          imgData={imgData}
        />
      );

      const uploadIcon = screen.getByRole("img", { name: /preview/i });

      expect(uploadIcon).toBeVisible();
    });
  });

  describe("When all fields are filled and button is clicked", () => {
    test("Then it should call submitData", async () => {
      const submitData = jest.fn();
      const changeData = jest.fn();
      const changeFile = jest.fn();
      const formData = {};
      const isFormInvalid = true;
      const imgData = {
        imageDefault: "hello",
      };
      const inputFields = [
        /name/i,
        /description/i,
        /location/i,
        /coordinates/i,
      ];
      const text = "hola";

      render(
        <SpotForm
          submitData={submitData}
          changeData={changeData}
          changeFile={changeFile}
          formData={formData}
          isFormInvalid={isFormInvalid}
          imgData={imgData}
        />
      );

      const fields = inputFields.map((label) =>
        screen.getByPlaceholderText(label)
      );
      fields.forEach((field) => userEvent.type(field, text));
      const button = screen.getByRole("button");

      expect(button).not.toBeDisabled();
    });
  });
});
