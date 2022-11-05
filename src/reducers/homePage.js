import {
    FETCH_HOME_IN_PROGRESS,
    FETCH_HOME_SUCCESSFULLY,
    FETCH_HOME_WITH_ERRORS,
    SEARCH_INIT,
    SEARCH_IN_PROGRESS,
    SEARCH_SUCCESSFULLY,
    SEARCH_WITH_ERRORS,
} from '../actions/homePage/actionTypes';

export default () => {
    const defaultState = {
        trending: null,
        season: null,
        nextSeason: null,
        popular: null,
        top: null,
        homeInProgress: true,
        searchResult: null,
        searchInProgress: false,
    };

    return (state = defaultState, action) => {
        switch (action.type) {
            case FETCH_HOME_SUCCESSFULLY: {
                const { trending, season, nextSeason, popular, top } =
                    action.data.data;
                return {
                    ...state,
                    trending: {
                        count: trending.media.length,
                        entities: trending.media,
                    },
                    season: {
                        count: season.media.length,
                        entities: season.media,
                    },
                    nextSeason: {
                        count: nextSeason.media.length,
                        entities: nextSeason.media,
                    },
                    popular: {
                        count: popular.media.length,
                        entities: popular.media,
                    },
                    top: {
                        count: top.media.length,
                        entities: top.media,
                    },
                    homeInProgress: false,
                };
            }
            case FETCH_HOME_IN_PROGRESS: {
                return {
                    ...state,
                    trending: null,
                    season: null,
                    nextSeason: null,
                    popular: null,
                    top: null,
                    homeInProgress: true,
                };
            }
            case FETCH_HOME_WITH_ERRORS: {
                return {
                    ...state,
                    homeInProgress: false,
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
