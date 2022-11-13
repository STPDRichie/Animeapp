import { isFunction } from '../../utils/functions';
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
} from './actionTypes';

import AnimeResource from '../../gateway/resources/animePages';

export const fetchHomePageAnime = (callback) => async (dispatch) => {
    dispatch({ type: FETCH_HOME_IN_PROGRESS });
    const resource = new AnimeResource();
    const response = await resource.fetchHomePageAnime();
    const data = await response.json();
    if (response.ok && !data.errors) {
        dispatch({
            type: FETCH_HOME_SUCCESSFULLY,
            data,
        });
        if (isFunction(callback)) {
            callback();
        }
    } else {
        dispatch({
            type: FETCH_HOME_WITH_ERRORS,
            data,
        });
    }
};

export const initSearchAnime = (callback) => async (dispatch) => {
    dispatch({ type: SEARCH_INIT });
    if (isFunction(callback)) {
        callback();
    }
};

export const searchAnime = (query, callback) => async (dispatch) => {
    dispatch({ type: SEARCH_IN_PROGRESS });
    const resource = new AnimeResource();
    const response = await resource.searchAnime(query);
    const data = await response.json();
    if (response.ok && !data.errors) {
        dispatch({
            type: SEARCH_SUCCESSFULLY,
            data,
            query,
        });
        if (isFunction(callback)) {
            callback();
        }
    } else {
        dispatch({
            type: SEARCH_WITH_ERRORS,
            data,
        });
    }
};

export const fetchAnimeList =
    (listName, pageNumber, callback) => async (dispatch) => {
        dispatch({ type: FETCH_ANIME_LIST_IN_PROGRESS });
        const resource = new AnimeResource();
        const response = await resource.fetchAnimeList(listName, pageNumber);
        const data = await response.json();
        if (response.ok && !data.errors) {
            dispatch({
                type: FETCH_ANIME_LIST_SUCCESSFULLY,
                data,
                listName,
            });
            if (isFunction(callback)) {
                callback();
            }
        } else {
            dispatch({
                type: FETCH_ANIME_LIST_WITH_ERRORS,
                data,
            });
        }
    };
