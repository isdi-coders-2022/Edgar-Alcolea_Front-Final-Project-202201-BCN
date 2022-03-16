import { render, screen } from "@testing-library/react";
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
});
