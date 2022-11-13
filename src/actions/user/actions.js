import { isFunction } from '../../utils/functions';
import {
    PROFILE_IN_PROGRESS,
    PROFILE_SUCCESSFULLY,
    PROFILE_WITH_ERRORS,
    ADD_ANIME_TO_LIST_IN_PROGRESS,
    ADD_ANIME_TO_LIST_SUCCESSFULLY,
    ADD_ANIME_TO_LIST_WITH_ERRORS,
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
