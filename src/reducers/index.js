import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

const attachedReducers = ['animePages', 'anime', 'user', 'media'];

function RootReducer(history, initialState) {
    const reducersMap = {
        router: connectRouter(history),
    };
    attachedReducers.forEach((reducerName) => {
        const reducerModule = require(`./${reducerName}`);
        reducersMap[reducerName] = reducerModule.default(initialState, history);
    });
    return combineReducers(reducersMap);
}

export default RootReducer;
