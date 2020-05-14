import { example1, example2 } from '../exercise';
import flushPromises from 'flush-promises';

jest.mock('axios', () => ({
  get: jest.fn(() =>
    Promise.resolve({
      post: {
        id: 1,
      },
    }),
  ),
}));

describe('arrow function', () => {
  test('exercise1', () => {
    expect(example1()).toBeTruthy();
  });

  test('exercise2', async () => {
    const app = new example2();
    app.fetchData();
    await flushPromises();
    expect(app.post.id).toBe(app.validation);
  });
});
