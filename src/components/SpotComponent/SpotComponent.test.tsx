import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
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
        createdBy: "62274dd6fb4746a872d98b8d",
        location: "The mind inside its creator",
        xCoordinate: 24.215,
        yCoordinate: 45.751,
        image: "testImg",
      };

      render(
        <Provider store={store}>
          <SpotComponent spot={spot} />
        </Provider>
      );
      const spotNames = screen.getAllByText(spot.name);

      expect(spotNames[0]).toBeInTheDocument();
    });
  });

  describe("When its deleteButton gets clicked", () => {
    test("Then it should disappear from the document", async () => {
      const spot = {
        id: "3",
        name: "Test Place",
        marked: 20,
        description: "A place that exists just for the purpose of testing.",
        createdBy: "62274dd6fb4746a872d98b8d",
        location: "The mind inside its creator",
        xCoordinate: 24.215,
        yCoordinate: 45.751,
        image: "testImg",
      };

      render(
        <Provider store={store}>
          <SpotComponent spot={spot} />
        </Provider>
      );

      const buttons = screen.getAllByTitle(/delete-button/i);
      userEvent.click(buttons[0]);

      expect(buttons[0]).toBeInTheDocument();
    });
  });
});
