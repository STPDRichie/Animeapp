import { configureStore } from '@reduxjs/toolkit';

import makeReducers from './index';

const store = configureStore({
    reducer: makeReducers(),
});

export default store;
