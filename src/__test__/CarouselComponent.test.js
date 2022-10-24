import React from "react";
import renderer from "react-test-renderer";
import CarouselComponent from "../pages/components/CarouselComponent";

describe("CarouselComponent", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<CarouselComponent />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
