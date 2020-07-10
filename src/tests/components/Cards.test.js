import Cards from '../../components/Cards';
import { shallow } from 'enzyme';
import React from 'react';

describe('<Cards />', () => {
  it('expect to render Cards component with mocked robots', () => {
    const mockedRobots = [
      {
        id: 1,
        name: 'Jon Doe',
        username: 'JonJohn',
        email: 'john@gmail.com',
      },
    ];
    expect(shallow(<Cards robots={mockedRobots} />)).toMatchSnapshot();
  });
});
