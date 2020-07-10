import Card from '../../components/Card';
import { shallow } from 'enzyme';
import React from 'react';

describe('<Card />', () => {
  it('expect to render Card component', () => {
    expect(shallow(<Card />)).toMatchSnapshot();
  });
});
