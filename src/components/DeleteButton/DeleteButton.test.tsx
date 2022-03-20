import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import DeleteButton from "./DeleteButton";

describe("Given a DeleteButton component", () => {
  describe("When it receives an action by props and gets clicked", () => {
    test("Then it should call that action", () => {
      const action = jest.fn();

      render(<DeleteButton actionOnClick={action} />);
      const button = screen.getByTitle(/delete-button/i);
      userEvent.click(button);

      expect(action).toHaveBeenCalled();
    });
  });
});
