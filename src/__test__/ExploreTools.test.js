import React from 'react';
import renderer from 'react-test-renderer';
import ExploreTool from '../pages/components/ExploreTool';
import ToolsData from '../data/ToolsData';

describe('ExploreTool', () => {
  const tool = ToolsData.find((tool) => tool.id === Number(1));
  it('renders correctly', () => {
    const tree = renderer.create(<ExploreTool tool={tool} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
