import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

describe("Given an App component", () => {
  describe("When it renders", () => {
    test("Then it should display a heading with Welcome to PK Spots!", () => {
      render(
        <BrowserRouter>
          <App />
        </BrowserRouter>
      );

      const navBar = screen.getByRole("list", { name: "navbar" });

      expect(navBar).toBeInTheDocument();
    });
  });
});
