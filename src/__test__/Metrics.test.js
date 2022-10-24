import React from "react";
import renderer from "react-test-renderer";
import Metrics from "../pages/components/Metrics";

describe("Metrics", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Metrics />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
