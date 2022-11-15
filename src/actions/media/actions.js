import { isFunction } from '../../utils/functions';
import {
    FETCH_FULL_ANIME_INFO_IN_PROGRESS,
    FETCH_FULL_ANIME_INFO_SUCCESSFULLY,
    FETCH_FULL_ANIME_INFO_WITH_ERRORS,
} from './actionTypes';

import MediaResource from '../../gateway/resources/media';

export const fetchFullAnimeInfo = (mediaId, callback) => async (dispatch) => {
    dispatch({ type: FETCH_FULL_ANIME_INFO_IN_PROGRESS });
    const resource = new MediaResource();
    const response = await resource.fetchFullAnimeInfo(mediaId);
    const data = await response.json();
    if (response.ok && !data.errors) {
        dispatch({
            type: FETCH_FULL_ANIME_INFO_SUCCESSFULLY,
            data,
        });
        if (isFunction(callback)) {
            callback();
        }
    } else {
        dispatch({
            type: FETCH_FULL_ANIME_INFO_WITH_ERRORS,
            data,
        });
    }
};
