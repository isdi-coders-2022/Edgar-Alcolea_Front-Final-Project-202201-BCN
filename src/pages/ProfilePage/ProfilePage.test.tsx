import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { pkTheme } from "../../pkTheme";
import store from "../../redux/store";
import ProfilePage from "./ProfilePage";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({
    id: "12345",
  }),
  useRouteMatch: () => ({
    url: "/profile/12345",
  }),
}));

const user = {
  username: "Laulhus",
  id: "12345",
  image:
    "https://firebasestorage.googleapis.com/v0/b/pk-spots-68866.appspot.com/o/uploads%5Cfotoed.jpg?alt=media&token=878c1561-c1f7-4f5a-a354-4947553e0def",
  admin: true,
  iat: 1648025837,
};
jest.mock("../../redux/hooks", () => ({
  ...jest.requireActual("../../redux/hooks"),
  useAppSelector: () => user,
}));

describe("Given a ProfilePage component", () => {
  describe("When its rendered and gets an id by params", () => {
    test("Then it should display the id's user image", async () => {
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
        name: "Laulhus",
      });

      expect(element).toBeInTheDocument();
    });
  });

  describe("When gets clicked on Logout button", () => {
    test("Then the page should disappear", async () => {
      render(
        <ThemeProvider theme={pkTheme}>
          <BrowserRouter>
            <Provider store={store}>
              <ProfilePage />
            </Provider>
          </BrowserRouter>
        </ThemeProvider>
      );

      const element = await screen.findAllByRole("button", { name: /logout/i });
      await userEvent.click(element[0]);

      expect(element[0]).toBeInTheDocument();
    });
  });
});
