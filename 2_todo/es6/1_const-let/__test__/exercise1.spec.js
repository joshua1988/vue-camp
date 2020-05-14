import { example1, example2 } from '../exercise';

describe('const & let', () => {
  test('exercise1', () => {
    expect(example1()).toBeTruthy();
  });

  test('exercise2', () => {
    expect(example2()).toBeTruthy();
  });
});
