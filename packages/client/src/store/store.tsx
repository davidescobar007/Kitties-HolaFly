import { configureStore } from '@reduxjs/toolkit';

import kittensReducer from '../features/cat';
import { kittensApi } from '../serviceApi/kittensApi';

export const store = configureStore({
  reducer: {
    kittenList: kittensReducer,

    [kittensApi.reducerPath]: kittensApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(kittensApi.middleware),
});
