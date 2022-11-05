import {
    FETCH_POPULAR_IN_PROGRESS,
    FETCH_POPULAR_SUCCESSFULLY,
    FETCH_POPULAR_WITH_ERRORS,
    SEARCH_INIT,
    SEARCH_IN_PROGRESS,
    SEARCH_SUCCESSFULLY,
    SEARCH_WITH_ERRORS,
} from '../actions/homePage/actionTypes';

export default () => {
    const defaultState = {
        popular: null,
        popularInProgress: true,
        searchResult: null,
        searchInProgress: false,
    };

    return (state = defaultState, action) => {
        switch (action.type) {
            case FETCH_POPULAR_SUCCESSFULLY: {
                const { media } = action.data.data.Page;
                return {
                    ...state,
                    popular: {
                        count: media.length,
                        entities: media,
                    },
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
            case SEARCH_INIT: {
                return {
                    ...state,
                    searchResult: null,
                    searchInProgress: false,
                };
            }
            case SEARCH_SUCCESSFULLY: {
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
            case SEARCH_IN_PROGRESS: {
                return {
                    ...state,
                    searchInProgress: true,
                };
            }
            case SEARCH_WITH_ERRORS: {
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
