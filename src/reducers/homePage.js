import {
    FETCH_POPULAR_IN_PROGRESS,
    FETCH_POPULAR_SUCCESSFULLY,
    FETCH_POPULAR_WITH_ERRORS,
} from '../actions/homePage/actionTypes';

export default () => {
    const defaultState = {
        searchResult: null,
        searchInProgress: false,
    };

    return (state = defaultState, action) => {
        switch (action.type) {
            case FETCH_POPULAR_SUCCESSFULLY: {
                const { media } = action.data.data.Page;
                return {
                    ...state,
                    searchResult: {
                        count: media.length,
                        entities: media,
                    },
                    searchInProgress: false,
                };
            }
            case FETCH_POPULAR_IN_PROGRESS: {
                return {
                    ...state,
                    searchResult: null,
                    searchInProgress: true,
                };
            }
            case FETCH_POPULAR_WITH_ERRORS: {
                return {
                    ...state,
                    searchInProgress: false,
                };
            }
            default:
                return state;
        }
    };
};
