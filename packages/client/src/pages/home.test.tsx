import { screen, waitFor } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { customRenderWithContext, renderWithContext } from '../../test.utils';

import Home from './home';

const apiData = [
  {
    id: 0,
    name: 'Leo',
    gender: 'male',
    imageFileName: 'leo.jpeg',
    description:
      'Leo is a supercute boy who really wants his forever home for Christmas. He is quite a chilled cat and is used to people and other cats. Come and meet Leo and give him the loving home he is yearning for.',
    age: '10 years old',
  },
  {
    id: 1,
    name: 'Jasmine',
    gender: 'female',
    imageFileName: 'jasmine.jpeg',
    description:
      'Jasmine is a beautiful young girl who will make a wonderful pet to any household. She is loving and fun and gets on with other cats. Please come and meet Jasmin at the cat shelter and I am sure you will fall in love with her.',
    age: '2 years old',
  },
];
const store = {
  kittens: {
    queries: {
      'getkittens("")': {
        status: 'fulfilled',
        endpointName: 'getkittens',
        requestId: 'qwerty',
        originalArgs: '',
        startedTimeStamp: 1,
        data: apiData,
        fulfilledTimeStamp: 1,
      },
    },
    mutations: {},
    provided: {},
    subscriptions: {
      'getkittens("")': {
        qwerty: {
          pollingInterval: 0,
        },
      },
    },
    config: {
      online: true,
      focused: false,
      middlewareRegistered: true,
      refetchOnFocus: false,
      refetchOnReconnect: false,
      refetchOnMountOrArgChange: false,
      keepUnusedDataFor: 60,
      reducerPath: 'kittens',
    },
  },
};
describe('home page', () => {
  it('home page should render', async () => {
    const { getByText } = renderWithContext(<Home />);
    await waitFor(() => {
      expect(getByText('My Cats')).toBeInTheDocument();
    });
  });

  it('Home page should render cards after making apiCall', async () => {
    customRenderWithContext(<Home />, store);
    const cards = await screen.findAllByTestId('catCard');
    await waitFor(() => {
      expect(cards.length).toBe(2);
    });
    expect(cards[0]).toHaveTextContent('Visit');
  });
});
