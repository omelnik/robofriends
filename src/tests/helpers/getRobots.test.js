const fetch = require('node-fetch');
import { addNumbers, getUsers } from '../../helpers/getRobots.js';
import { mockedUsers } from './mocks';

describe('add two numbers function', () => {
  it('adds two numbers', () => {
    expect(addNumbers(1, 2)).toEqual(3);
  });

  it('does not add the third number', () => {
    expect(addNumbers(1, 2, 3)).toEqual(addNumbers(1, 2));
  });

  it('returns 0 when two numbers are null', () => {
    expect(addNumbers(null, null)).toEqual(0);
  });

  it('returns NaN when one param is undefined and another one is null', () => {
    expect(addNumbers(undefined, null)).toBeNaN();
  });
});

describe('getRobots function', () => {
  it('calls the api to get users', () => {
    expect.assertions(1);
    return getUsers(fetch).then((data) => {
      expect(data.length).toEqual(10);
    });
  });

  it('calls the mock to get users', () => {
    // test example with mocked data
    expect.assertions(2);
    return getUsers(mockedUsers).then((data) => {
      expect(mockedUsers.mock.calls.length).toEqual(1);
      expect(data.length).toEqual(10);
    });
  });
});
