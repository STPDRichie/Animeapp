import {
    FETCH_TRENDING_IN_PROGRESS,
    FETCH_TRENDING_SUCCESSFULLY,
    FETCH_TRENDING_WITH_ERRORS,
    SEARCH_INIT,
    SEARCH_IN_PROGRESS,
    SEARCH_SUCCESSFULLY,
    SEARCH_WITH_ERRORS,
} from '../actions/homePage/actionTypes';

export default () => {
    const defaultState = {
        trending: null,
        trendingInProgress: true,
        searchResult: null,
        searchInProgress: false,
    };

    return (state = defaultState, action) => {
        switch (action.type) {
            case FETCH_TRENDING_SUCCESSFULLY: {
                const { media } = action.data.data.Page;
                return {
                    ...state,
                    trending: {
                        count: media.length,
                        entities: media,
                    },
                    trendingInProgress: false,
                };
            }
            case FETCH_TRENDING_IN_PROGRESS: {
                return {
                    ...state,
                    trending: null,
                    trendingInProgress: true,
                };
            }
            case FETCH_TRENDING_WITH_ERRORS: {
                return {
                    ...state,
                    trendingInProgress: false,
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
