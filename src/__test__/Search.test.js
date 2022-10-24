import React from 'react';
import renderer from 'react-test-renderer';
import Search from '../pages/components/Search';

describe('Search', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Search />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
