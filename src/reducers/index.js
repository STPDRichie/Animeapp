import { combineReducers } from 'redux';

const attachedReducers = [
    'homePage',
];

function RootReducer(initialState, history) {
    const reducersMap = {};
    attachedReducers.forEach((reducerName) => {
        const reducerModule = require(`./${reducerName}`);
        reducersMap[reducerName] = reducerModule.default(initialState, history);
    });
    return combineReducers(reducersMap);
}

export default RootReducer;
