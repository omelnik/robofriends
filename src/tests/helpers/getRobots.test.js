import { addNumbers } from '../../helpers/getRobots.js';

it('adds two numbers', () => {
  return expect(addNumbers(1, 2)).toEqual(4);
});
