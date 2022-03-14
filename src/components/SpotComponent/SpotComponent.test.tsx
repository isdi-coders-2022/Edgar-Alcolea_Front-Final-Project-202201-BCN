import {
  queryByText,
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
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
        coordinates: [0, 0],
        image: "testImg",
      };

      render(
        <Provider store={store}>
          <SpotComponent spot={spot} />
        </Provider>
      );
      const spotName = screen.getByText(spot.name);

      expect(spotName).toBeInTheDocument();
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
        coordinates: [0, 0],
        image: "testImg",
      };

      render(
        <Provider store={store}>
          <SpotComponent spot={spot} />
        </Provider>
      );

      const button = screen.getByTitle(/delete-button/i);
      userEvent.click(button);

      expect(button).toBeInTheDocument();
    });
  });
});
