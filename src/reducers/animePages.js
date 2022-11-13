import {
    FETCH_HOME_IN_PROGRESS,
    FETCH_HOME_SUCCESSFULLY,
    FETCH_HOME_WITH_ERRORS,
    SEARCH_INIT,
    SEARCH_IN_PROGRESS,
    SEARCH_SUCCESSFULLY,
    SEARCH_WITH_ERRORS,
    FETCH_ANIME_LIST_IN_PROGRESS,
    FETCH_ANIME_LIST_SUCCESSFULLY,
    FETCH_ANIME_LIST_WITH_ERRORS,
} from '../actions/animePages/actionTypes';
import {
    ADD_ANIME_TO_LIST_SUCCESSFULLY,
    DELETE_ANIME_FROM_LISTS_SUCCESSFULLY,
    CHANGE_ANIME_STATUS_SUCCESSFULLY,
} from '../actions/user/actionTypes';

import {
    changeMediaInLists,
    deleteMediaFromLists,
} from '../actions/user/utils';

export default () => {
    const defaultState = {
        trending: null,
        season: null,
        nextSeason: null,
        popular: null,
        top: null,
        pageTitle: null,
        animeInProgress: true,
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
                    animeInProgress: false,
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
                    animeInProgress: true,
                };
            }
            case FETCH_HOME_WITH_ERRORS: {
                return {
                    ...state,
                    animeInProgress: false,
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
                    searchResult: null,
                    searchInProgress: true,
                };
            }
            case SEARCH_WITH_ERRORS: {
                return {
                    ...state,
                    searchInProgress: false,
                };
            }
            case ADD_ANIME_TO_LIST_SUCCESSFULLY: {
                const { SaveMediaListEntry } = action.data.data;
                return {
                    ...state,
                    ...changeMediaInLists(
                        {
                            trending: state.trending,
                            season: state.season,
                            nextSeason: state.nextSeason,
                            popular: state.popular,
                            top: state.top,
                            searchResult: state.searchResult,
                        },
                        SaveMediaListEntry,
                    ),
                };
            }
            case DELETE_ANIME_FROM_LISTS_SUCCESSFULLY: {
                const { entryId } = action;
                return {
                    ...state,
                    ...deleteMediaFromLists(
                        {
                            trending: state.trending,
                            season: state.season,
                            nextSeason: state.nextSeason,
                            popular: state.popular,
                            top: state.top,
                            searchResult: state.searchResult,
                        },
                        entryId,
                    ),
                };
            }
            case CHANGE_ANIME_STATUS_SUCCESSFULLY: {
                const { SaveMediaListEntry } = action.data.data;
                return {
                    ...state,
                    ...changeMediaInLists(
                        {
                            trending: state.trending,
                            season: state.season,
                            nextSeason: state.nextSeason,
                            popular: state.popular,
                            top: state.top,
                            searchResult: state.searchResult,
                        },
                        SaveMediaListEntry,
                    ),
                };
            }
            case FETCH_ANIME_LIST_SUCCESSFULLY: {
                const { list } = action.data.data;
                const { pageTitle } = action.data.additionalResponse;
                const { listName } = action;
                let newList = {
                    count: list.media.length,
                    entities: list.media,
                };
                if (state[listName]) {
                    newList = {
                        count: state[listName].count + list.media.length,
                        entities: [...state[listName].entities, ...list.media],
                    };
                }
                return {
                    ...state,
                    [listName]: newList,
                    pageTitle,
                    animeInProgress: false,
                };
            }
            case FETCH_ANIME_LIST_IN_PROGRESS: {
                return {
                    ...state,
                    animeInProgress: true,
                };
            }
            case FETCH_ANIME_LIST_WITH_ERRORS: {
                return {
                    ...state,
                    animeInProgress: false,
                };
            }
            default:
                return state;
        }
    };
};
