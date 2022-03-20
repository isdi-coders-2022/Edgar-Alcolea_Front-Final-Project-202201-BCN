import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ThemeProvider } from "styled-components";
import { pkTheme } from "../../pkTheme";
import Button from "./Button";

describe("Given a Button component", () => {
  describe("When it receives an action by props and gets clicked", () => {
    test("Then it should call that action", () => {
      const action = jest.fn();

      render(
        <ThemeProvider theme={pkTheme}>
          <Button actionOnClick={action} />
        </ThemeProvider>
      );
      const button = screen.getByRole("button");
      userEvent.click(button);

      expect(action).toHaveBeenCalled();
    });
  });
});
