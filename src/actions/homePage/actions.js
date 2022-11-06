import { isFunction } from '../../utils/functions';
import {
    FETCH_HOME_IN_PROGRESS,
    FETCH_HOME_SUCCESSFULLY,
    FETCH_HOME_WITH_ERRORS,
    SEARCH_INIT,
    SEARCH_IN_PROGRESS,
    SEARCH_SUCCESSFULLY,
    SEARCH_WITH_ERRORS,
} from './actionTypes';

import HomeResource from '../../gateway/resources/homePage';

export const fetchHomePageAnime = (gateway, callback) => async (dispatch) => {
    dispatch({ type: FETCH_HOME_IN_PROGRESS });
    const resource = new HomeResource(gateway);
    const response = await resource.fetchHomePageAnime();
    const data = await response.json();
    if (response.ok) {
        dispatch({
            type: FETCH_HOME_SUCCESSFULLY,
            data,
        });
        if (isFunction(callback)) {
            callback();
        }
    } else {
        dispatch({ type: FETCH_HOME_WITH_ERRORS });
    }
};

export const initSearchAnime = (callback) => async (dispatch) => {
    dispatch({ type: SEARCH_INIT });
    if (isFunction(callback)) {
        callback();
    }
};

export const searchAnime = (query, gateway, callback) => async (dispatch) => {
    dispatch({ type: SEARCH_IN_PROGRESS });
    const resource = new HomeResource(gateway);
    const response = await resource.searchAnime(query);
    const data = await response.json();
    if (response.ok) {
        dispatch({
            type: SEARCH_SUCCESSFULLY,
            data,
            query,
        });
        if (isFunction(callback)) {
            callback();
        }
    } else {
        dispatch({ type: SEARCH_WITH_ERRORS });
    }
};
