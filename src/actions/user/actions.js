import { isFunction } from '../../utils/functions';
import {
    PROFILE_IN_PROGRESS,
    PROFILE_SUCCESSFULLY,
    PROFILE_WITH_ERRORS,
    ADD_ANIME_TO_LIST_IN_PROGRESS,
    ADD_ANIME_TO_LIST_SUCCESSFULLY,
    ADD_ANIME_TO_LIST_WITH_ERRORS,
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
