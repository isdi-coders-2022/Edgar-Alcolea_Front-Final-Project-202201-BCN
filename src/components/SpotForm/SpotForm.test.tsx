import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SpotForm from "./SpotForm";

describe("Given a SpotForm component", () => {
  describe("When all fields are filled and button is clicked", () => {
    test("Then it should call submitData", async () => {
      const submitData = jest.fn();

      const inputFields = [
        /name/i,
        /description/i,
        /location/i,
        /coordinates/i,
      ];
      const text = "hola";

      render(<SpotForm submitData={submitData} />);

      const fields = inputFields.map((label) =>
        screen.getByPlaceholderText(label)
      );
      fields.forEach((field) => userEvent.type(field, text));
      const button = screen.getByRole("button");
      userEvent.click(button);
      expect(submitData).toHaveBeenCalled();
    });
  });
});
