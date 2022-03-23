import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { pkTheme } from "../../pkTheme";
import store from "../../redux/store";
import ProfilePage from "./ProfilePage";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({
    id: "62347d6cb5e8fa041f7c1a46",
  }),
  useRouteMatch: () => ({
    url: "/profile/62347d6cb5e8fa041f7c1a46",
  }),
}));

describe("Given a ProfilePage component", () => {
  describe("When its rendered and gets an id by params", () => {
    test("Then it should display the id's user image", async () => {
      const user = {
        username: "Laulhus",
        id: "62347d6cb5e8fa041f7c1a46",
      };

      render(
        <ThemeProvider theme={pkTheme}>
          <BrowserRouter>
            <Provider store={store}>
              <ProfilePage />
            </Provider>
          </BrowserRouter>
        </ThemeProvider>
      );

      const element = await screen.findByRole("img", {
        name: user.username,
      });

      expect(element).toBeInTheDocument();
    });
  });
});
