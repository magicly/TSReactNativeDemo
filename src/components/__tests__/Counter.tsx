import * as React from 'react';
import { Text } from 'react-native';
import * as renderer from 'react-test-renderer';
import Counter from '../Counter';

test('renders correctly', () => {
  const tree = renderer.create(<Counter name="counter1" />).toJSON();
  expect(tree).toMatchSnapshot();
});
