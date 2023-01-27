// eslint-disable-next-line @typescript-eslint/no-explicit-any
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { render } from '@testing-library/react';

import { getStoreWithState, setupStore } from './src/store/store';

export function renderWithContext(
  ui: JSX.Element,
  {
    preloadedState = {},
    // Automatically create a store instance if no store was passed in
    store = setupStore(preloadedState),
    ...renderOptions
  } = {}
) {
  setupListeners(store.dispatch);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function Wrapper({ children }: { children: any }) {
    return <Provider store={store}>{children}</Provider>;
  }

  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}

export function customRenderWithContext(
  element: React.ReactElement,
  state?: any
) {
  const store = getStoreWithState(state);
  const utils = render(
    <Provider store={store}>
      <Router>{element}</Router>
    </Provider>
  );
  return { store, ...utils };
}
