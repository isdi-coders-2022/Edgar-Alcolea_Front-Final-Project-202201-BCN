import { render, screen } from "@testing-library/react";
import SpotComponent from "./SpotComponent";

describe("Given a SpotComponent", () => {
  describe("When it receives a spot object", () => {
    test("Then it should display the spot name", () => {
      const spot = {
        name: "Test Place",
        marked: 20,
        description: "A place that exists just for the purpose of testing.",
        createdBy: "62274dd6fb4746a872d98b8d",
        location: "The mind inside its creator",
        coordinates: [0, 0],
        image: "testImg",
      };

      render(<SpotComponent spot={spot} />);
      const spotName = screen.getByText(spot.name);

      expect(spotName).toBeInTheDocument();
    });
  });
});
