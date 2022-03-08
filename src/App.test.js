import { render, screen } from "@testing-library/react";
import App from "./App";

describe("Given an App component", () => {
  describe("When it renders", () => {
    test("Then it should display a heading with Welcome to PK Spots!", () => {
      render(<App />);
      const title = screen.getByRole("heading", {
        name: /welcome to pk spots!/i,
      });
      expect(title).toBeInTheDocument();
    });
  });
});
