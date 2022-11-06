import { configureStore } from '@reduxjs/toolkit';
import { routerMiddleware } from 'connected-react-router';
import logger from 'redux-logger';

import makeReducers from './index';
import history from '../history';

const store = configureStore({
    reducer: makeReducers(history),
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(routerMiddleware(history), logger),
});

export default store;
