import Card from '../../components/Card';
import { shallow, mount, render } from 'enzyme';
import React from 'react';

describe('<Card />', () => {
  it('expect to render a Card component', () => {
    expect(shallow(<Card />)).toMatchSnapshot();
  });
});
