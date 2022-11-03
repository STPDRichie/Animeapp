import { isFunction } from '../../utils/functions';
import {
    FETCH_POPULAR_IN_PROGRESS,
    FETCH_POPULAR_SUCCESSFULLY,
    FETCH_POPULAR_WITH_ERRORS,
} from './actionTypes';

import HomeResource from '../../gateway/resources/homePage';

export const fetchPopular = (callback) => async (dispatch) => {
    dispatch({ type: FETCH_POPULAR_IN_PROGRESS });
    const resource = new HomeResource({ url: '', token: 'asd' });
    const response = await resource.fetchPopular();
    const data = await response.json();
    if (response.ok) {
        dispatch({
            type: FETCH_POPULAR_SUCCESSFULLY,
            data,
        });
        if (isFunction(callback)) {
            callback();
        }
    } else {
        dispatch({ type: FETCH_POPULAR_WITH_ERRORS });
    }
};
