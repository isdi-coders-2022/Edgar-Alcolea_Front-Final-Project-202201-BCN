import { render, screen } from "@testing-library/react";
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
});
