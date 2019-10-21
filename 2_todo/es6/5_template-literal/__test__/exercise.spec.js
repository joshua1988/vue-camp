import { template1, template2 } from '../exercise';

describe('template literal', () => {
  test('template1', () => {
    expect(template1).toBe('hello world');
  });

  test('template2', () => {
    expect(template2).toBe('hello vue');
  });
});
