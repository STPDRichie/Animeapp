import { isFunction } from '../../utils/functions';
import {
    PROFILE_IN_PROGRESS,
    PROFILE_SUCCESSFULLY,
    PROFILE_WITH_ERRORS,
    USER_ANIME_LISTS_IN_PROGRESS,
    USER_ANIME_LISTS_SUCCESSFULLY,
    USER_ANIME_LISTS_WITH_ERRORS,
    USER_ANIME_LISTS_CHANGED,
    ADD_ANIME_TO_LIST_IN_PROGRESS,
    ADD_ANIME_TO_LIST_SUCCESSFULLY,
    ADD_ANIME_TO_LIST_WITH_ERRORS,
    DELETE_ANIME_FROM_LISTS_IN_PROGRESS,
    DELETE_ANIME_FROM_LISTS_SUCCESSFULLY,
    DELETE_ANIME_FROM_LISTS_WITH_ERRORS,
    FETCH_ANIME_INFO_IN_PROGRESS,
    FETCH_ANIME_INFO_SUCCESSFULLY,
    FETCH_ANIME_INFO_WITH_ERRORS,
    CHANGE_ANIME_STATUS_IN_PROGRESS,
    CHANGE_ANIME_STATUS_SUCCESSFULLY,
    CHANGE_ANIME_STATUS_WITH_ERRORS,
} from './actionTypes';

import UserResource from '../../gateway/resources/user';

export const getProfile = (callback) => async (dispatch) => {
    dispatch({ type: PROFILE_IN_PROGRESS });
    const resource = new UserResource();
    const response = await resource.getProfile();
    const data = await response.json();
    if (response.ok && !data.errors) {
        dispatch({
            type: PROFILE_SUCCESSFULLY,
            data,
        });
        if (isFunction(callback)) {
            callback();
        }
    } else {
        dispatch({
            type: PROFILE_WITH_ERRORS,
            data,
        });
    }
};

export const getUserAnimeLists = (userId, callback) => async (dispatch) => {
    dispatch({ type: USER_ANIME_LISTS_IN_PROGRESS });
    const resource = new UserResource();
    const response = await resource.getUserAnimeLists(userId);
    const data = await response.json();
    if (response.ok && !data.errors) {
        dispatch({
            type: USER_ANIME_LISTS_SUCCESSFULLY,
            data,
        });
        if (isFunction(callback)) {
            callback();
        }
    } else {
        dispatch({
            type: USER_ANIME_LISTS_WITH_ERRORS,
            data,
        });
    }
};

export const initUserAnimeLists = (callback) => async (dispatch) => {
    dispatch({ type: USER_ANIME_LISTS_CHANGED });
    if (isFunction(callback)) {
        callback();
    }
};

export const addAnimeToList =
    (status, mediaId, callback) => async (dispatch) => {
        dispatch({ type: ADD_ANIME_TO_LIST_IN_PROGRESS });
        const resource = new UserResource();
        const response = await resource.addAnimeToList(status, mediaId);
        const data = await response.json();
        if (response.ok && !data.errors) {
            dispatch({
                type: ADD_ANIME_TO_LIST_SUCCESSFULLY,
                data,
            });
            if (isFunction(callback)) {
                callback();
            }
        } else {
            dispatch({
                type: ADD_ANIME_TO_LIST_WITH_ERRORS,
                data,
            });
        }
    };

export const deleteAnimeFromLists = (entryId, callback) => async (dispatch) => {
    dispatch({ type: DELETE_ANIME_FROM_LISTS_IN_PROGRESS });
    const resource = new UserResource();
    const response = await resource.deleteAnimeFromLists(entryId);
    const data = await response.json();
    if (response.ok && !data.errors) {
        dispatch({
            type: DELETE_ANIME_FROM_LISTS_SUCCESSFULLY,
            data,
            entryId,
        });
        if (isFunction(callback)) {
            callback();
        }
    } else {
        dispatch({
            type: DELETE_ANIME_FROM_LISTS_WITH_ERRORS,
            data,
        });
    }
};

export const fetchAnimeInfo = (mediaId, callback) => async (dispatch) => {
    dispatch({ type: FETCH_ANIME_INFO_IN_PROGRESS });
    const resource = new UserResource();
    const response = await resource.fetchAnimeInfo(mediaId);
    const data = await response.json();
    if (response.ok && !data.errors) {
        dispatch({
            type: FETCH_ANIME_INFO_SUCCESSFULLY,
            data,
        });
        if (isFunction(callback)) {
            callback();
        }
    } else {
        dispatch({
            type: FETCH_ANIME_INFO_WITH_ERRORS,
            data,
        });
    }
};

export const changeAnimeStatus =
    (mediaId, formData, callback) => async (dispatch) => {
        dispatch({ type: CHANGE_ANIME_STATUS_IN_PROGRESS });
        const resource = new UserResource();
        const response = await resource.changeAnimeStatus(mediaId, formData);
        const data = await response.json();
        if (response.ok && !data.errors) {
            dispatch({
                type: CHANGE_ANIME_STATUS_SUCCESSFULLY,
                data,
            });
            if (isFunction(callback)) {
                callback();
            }
        } else {
            dispatch({
                type: CHANGE_ANIME_STATUS_WITH_ERRORS,
                data,
            });
        }
    };
