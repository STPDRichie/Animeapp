import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';

import makeReducers from './index';

const store = configureStore({
    reducer: makeReducers(),
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
