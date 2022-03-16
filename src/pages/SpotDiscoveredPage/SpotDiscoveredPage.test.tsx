import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import SpotDiscoveredPage from "./SpotDiscoveredPage";

describe("Given a SpotDiscoveredPage component", () => {
  describe("When instantiated", () => {
    test("Then it should display a heading with Spot Discovered", () => {
      render(
        <BrowserRouter>
          <SpotDiscoveredPage />
        </BrowserRouter>
      );

      const title = screen.getByRole("heading", {
        name: /spot discovered/i,
      });
      expect(title).toBeInTheDocument();
    });
  });
});
