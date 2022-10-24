import React from "react";
import renderer from "react-test-renderer";
import Navbar from "../pages/components/Navbar";

describe('Navbar', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Navbar />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
