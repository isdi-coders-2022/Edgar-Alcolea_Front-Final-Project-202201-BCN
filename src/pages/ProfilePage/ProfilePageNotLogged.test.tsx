import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { pkTheme } from "../../pkTheme";
import store from "../../redux/store";
import ProfilePage from "./ProfilePage";
import React, { useState as useStateMock } from "react";
import { UserInterface } from "../../types/UserInterface";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({
    id: "6235fd21029d09413cc895c5",
  }),
  useRouteMatch: () => ({
    url: "/profile/6235fd21029d09413cc895c5",
  }),
}));

const user = {
  username: "TestMan",
  id: "62347d6cb5e8fa254f7c1a58",
  image: null,
  admin: true,
  iat: 1648025837,
};
jest.mock("../../redux/hooks", () => ({
  ...jest.requireActual("../../redux/hooks"),
  useAppSelector: () => user,
}));

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useState: jest.fn(),
}));

describe('Given a ProfilePage and a loggedUser "TestMan"', () => {
  const setState = jest.fn().mockImplementation(() => user);

  beforeEach(() => {
    (useStateMock as any).mockImplementation((user: UserInterface) => [
      user,
      setState,
    ]);
  });
  describe("When the profile image is null", () => {
    test("Then the image src should be default image", async () => {
      const defaultImage =
        "https://plataformacine.com/images/user-icon-placeholder-clear.png";

      render(
        <ThemeProvider theme={pkTheme}>
          <BrowserRouter>
            <Provider store={store}>
              <ProfilePage />
            </Provider>
          </BrowserRouter>
        </ThemeProvider>
      );

      const element = await screen.findByRole("img");
    });
  });
});
