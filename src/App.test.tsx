import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import store from "./redux/store";

describe("Given an App component", () => {
  describe("When it renders", () => {
    test("Then it should display a heading with Welcome to PK Spots!", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <App />
          </Provider>
        </BrowserRouter>
      );

      const title = screen.getByRole("heading", {
        name: /Welcome to PK Spots !/i,
      });

      expect(title).toBeInTheDocument();
    });
  });
});
