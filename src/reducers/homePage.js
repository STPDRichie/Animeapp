import {
    FETCH_POPULAR_IN_PROGRESS,
    FETCH_POPULAR_SUCCESSFULLY,
    FETCH_POPULAR_WITH_ERRORS,
} from '../actions/homePage/actionTypes';

export default () => {
    const defaultState = {
        popular: null,
        popularInProgress: false,
    }

    return (state = defaultState, action) => {
        switch (action.type) {
            case FETCH_POPULAR_SUCCESSFULLY: {
                console.log(action.data);
                return {
                    ...state,
                    popular: action.data,
                    popularInProgress: false,
                };
            }
            case FETCH_POPULAR_IN_PROGRESS: {
                return {
                    ...state,
                    popular: null,
                    popularInProgress: true,
                };
            }
            case FETCH_POPULAR_WITH_ERRORS: {
                return {
                    ...state,
                    popularInProgress: false,
                };
            }
            default:
                return state;
        }
    }
};
