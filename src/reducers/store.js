import { configureStore } from '@reduxjs/toolkit';
import { routerMiddleware } from 'connected-react-router';
import logger from 'redux-logger';

import makeReducers from './index';
import history from '../history';

const defaultMiddlewareConfig = {
    immutableCheck: {
        ignoredPaths: [
            'homePage.trending',
            'homePage.season',
            'homePage.nextSeason',
            'homePage.popular',
            'homePage.top',
            'homePage.searchResult',
        ],
    },
};

const store = configureStore({
    reducer: makeReducers(history),
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware(defaultMiddlewareConfig).concat(
            routerMiddleware(history),
            logger,
        ),
});

export default store;
