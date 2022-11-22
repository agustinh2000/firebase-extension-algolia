import { configureStore } from '@reduxjs/toolkit';

import rootReducer from 'state/reducers';

import thunk from 'redux-thunk';

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('state/reducers', () => {
    // eslint-disable-next-line global-require
    const newRootReducer = require('state/reducers').default;
    store.replaceReducer(newRootReducer);
  });
}

export default store;
