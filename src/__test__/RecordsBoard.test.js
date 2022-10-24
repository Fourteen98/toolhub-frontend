import React from 'react';
import renderer from 'react-test-renderer';
import RecordsBoard from '../pages/RecordsBoard';

describe('RecordsBoard', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<RecordsBoard />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
