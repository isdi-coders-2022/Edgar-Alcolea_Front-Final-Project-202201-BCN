import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { pkTheme } from "../../pkTheme";
import store from "../../redux/store";
import SpotComponent from "./SpotComponent";

describe("Given a SpotComponent", () => {
  describe("When it receives a spot object", () => {
    test("Then it should display the spot name", () => {
      const spot = {
        id: "1",
        name: "Test Place",
        marked: 20,
        description: "A place that exists just for the purpose of testing.",
        createdBy: { id: "62274dd6fb4746a872d98b8d", username: "testMan" },
        location: "The mind inside its creator",
        xCoordinate: 24.215,
        yCoordinate: 45.751,
        image: "testImg",
      };
      const filterCity = jest.fn();
      render(
        <ThemeProvider theme={pkTheme}>
          <BrowserRouter>
            <Provider store={store}>
              <SpotComponent
                spot={spot}
                mySpots={false}
                filterCity={filterCity}
              />
            </Provider>
          </BrowserRouter>
        </ThemeProvider>
      );
      const spotNames = screen.getAllByText(spot.name);

      expect(spotNames[0]).toBeInTheDocument();
    });
  });
});
