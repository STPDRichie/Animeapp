import { configureStore } from '@reduxjs/toolkit';
import { routerMiddleware } from 'connected-react-router';
import logger from 'redux-logger';

import makeReducers from './index';
import history from '../history';

const defaultMiddlewareConfig = {
    immutableCheck: {
        ignoredPaths: [
            'animePages.trending',
            'animePages.season',
            'animePages.nextSeason',
            'animePages.popular',
            'animePages.top',
            'animePages.searchResult',
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
