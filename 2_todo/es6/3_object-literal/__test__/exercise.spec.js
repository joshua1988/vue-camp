import { example } from '../exercise';

const answer = {
  name: 'App',
  router: {
    routes: [
      {
        path: 'sth',
        component: 'sthComponent',
      },
    ],
  },
  data: {
    id: 1,
  },
};

describe('object literal', () => {
  test('exercise', () => {
    expect(example()).toMatchObject(answer);
  });
});
