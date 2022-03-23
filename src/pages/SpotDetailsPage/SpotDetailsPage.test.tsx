import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { pkTheme } from "../../pkTheme";
import store from "../../redux/store";
import SpotDetailsPage from "./SpotDetailsPage";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({
    id: "123",
  }),
  useRouteMatch: () => ({
    url: "/spots/123",
  }),
}));

describe("Given a SpotDetailsPage", () => {
  describe("When it receives an id by params", () => {
    test("Then it should render the spot description", () => {
      const spot = {
        name: "Edgar",
        username: "Laulhus2",
        password:
          "$2b$10$5LWmSD2aXdFPcV5yPeF0buW1KTX9MhoYFi0v9yXlpAlRqplLXdEN6",
        age: 29,
        bio: "Hi everyone! I have been training Parkour since I was 16 years old, after travelling the world I noticed our community was lacking a place to gather all those cool spots we find in every city. I decided to create this app to fill that purpose and help share those hidden treasures and keep us connected.",
        city: "Barcelona",
        createdSpots: [],
        admin: false,
        id: "623b32c6132e9137b8e96c8a",
      };

      render(
        <ThemeProvider theme={pkTheme}>
          <BrowserRouter>
            <Provider store={store}>
              <SpotDetailsPage />
            </Provider>
          </BrowserRouter>
        </ThemeProvider>
      );

      const element = screen.getByTitle("spot-title");

      expect(element).toBeInTheDocument();
    });
  });

  describe("When clicked on edit button", () => {
    test("Then it should render a spot form", async () => {
      const spot = {
        name: "Edgar",
        username: "Laulhus2",
        password:
          "$2b$10$5LWmSD2aXdFPcV5yPeF0buW1KTX9MhoYFi0v9yXlpAlRqplLXdEN6",
        age: 29,
        bio: "Hi everyone! I have been training Parkour since I was 16 years old, after travelling the world I noticed our community was lacking a place to gather all those cool spots we find in every city. I decided to create this app to fill that purpose and help share those hidden treasures and keep us connected.",
        city: "Barcelona",
        createdSpots: [],
        admin: false,
        id: "623b32c6132e9137b8e96c8a",
      };

      render(
        <ThemeProvider theme={pkTheme}>
          <BrowserRouter>
            <Provider store={store}>
              <SpotDetailsPage />
            </Provider>
          </BrowserRouter>
        </ThemeProvider>
      );

      const button = screen.getByRole("button", { name: /edit/i });
      await userEvent.click(button);
      const spotElement = screen.getByLabelText(/name/i);
      expect(spotElement).toBeInTheDocument();
    });
  });
});
