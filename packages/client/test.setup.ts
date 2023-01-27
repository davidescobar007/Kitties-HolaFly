import matchers from '@testing-library/jest-dom/matchers';
import { cleanup } from '@testing-library/react';
/* eslint-disable simple-import-sort/imports */
import { afterAll, afterEach, expect } from 'vitest';

import { server } from './src/mocks/server';
import { kittensApi } from './src/serviceApi/kittensApi';
import { setupStore } from './src/store/store';

const store = setupStore({});
// extends Vitest's expect method with methods from react-testing-library
expect.extend(matchers);

// runs a cleanup after each test case (e.g. clearing jsdom)
afterEach(() => {
  server.resetHandlers();
  store.dispatch(kittensApi.util.resetApiState());
  cleanup();
});

afterAll(() => server.close());
