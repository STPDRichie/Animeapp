import { isFunction } from '../../utils/functions';
import {
    PROFILE_IN_PROGRESS,
    PROFILE_SUCCESSFULLY,
    PROFILE_WITH_ERRORS,
} from './actionTypes';

import AuthResource from '../../gateway/resources/auth';

export const getProfile = (callback) => async (dispatch) => {
    dispatch({ type: PROFILE_IN_PROGRESS });
    const resource = new AuthResource();
    const response = await resource.getProfile();
    const data = await response.json();
    if (response.ok) {
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
