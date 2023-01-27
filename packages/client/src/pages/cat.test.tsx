import { waitFor } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { renderWithContext } from '../../test.utils';

import CatProfile from './cat';

const store = {
  kittens: {
    queries: {
      'getSingleKitten("Leo")': {
        status: 'fulfilled',
        endpointName: 'getSingleKitten',
        requestId: 'foP_9S_J3H9d2Q-nCJHo7',
        originalArgs: 'Leo',
        startedTimeStamp: 1674825397912,
        data: {
          id: 0,
          name: 'Leo',
          gender: 'male',
          imageFileName: 'leo.jpeg',
          description:
            'Leo is a supercute boy who really wants his forever home for Christmas. He is quite a chilled cat and is used to people and other cats. Come and meet Leo and give him the loving home he is yearning for.',
          age: '10 years old',
        },
        fulfilledTimeStamp: 1674825399831,
      },
    },
    mutations: {},
    provided: {},
    subscriptions: {
      'getSingleKitten("Leo")': {
        wSBCaKkIdnomEbHB1zu4k: {
          pollingInterval: 0,
        },
      },
    },
    config: {
      online: true,
      focused: true,
      middlewareRegistered: true,
      refetchOnFocus: false,
      refetchOnReconnect: false,
      refetchOnMountOrArgChange: false,
      keepUnusedDataFor: 60,
      reducerPath: 'kittens',
    },
  },
};

describe('Cat page', () => {
  it('Cat page should render profile', async () => {
    const { getByTestId } = renderWithContext(<CatProfile />);
    expect(getByTestId('loader')).toBeInTheDocument();
    await waitFor(() => {
      expect(getByTestId('CatProfile')).toBeInTheDocument();
    });
  });
});
