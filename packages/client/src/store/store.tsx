import { configureStore } from '@reduxjs/toolkit';

import { kittensApi } from '../serviceApi/kittensApi';

const reducer = {
  [kittensApi.reducerPath]: kittensApi.reducer,
};
export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(kittensApi.middleware),
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const setupStore = (preloadedState: any) => {
  return configureStore({
    reducer: {
      [kittensApi.reducerPath]: kittensApi.reducer,
    },
    preloadedState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        immutableCheck: false,
        serializableCheck: false,
      }).concat(kittensApi.middleware),
  });
};

export function getStoreWithState(preloadedState?: RootState) {
  return configureStore({ reducer, preloadedState });
}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
