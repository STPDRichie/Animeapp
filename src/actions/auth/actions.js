import { isFunction } from '../../utils/functions';
import {
    LOGIN_IN_PROGRESS,
    LOGIN_SUCCESSFULLY,
    LOGIN_WITH_ERRORS,
} from './actionTypes';

import AuthResource from '../../gateway/resources/auth';

export const login =
    ({ email, password }, gateway, setToken) =>
    async (dispatch) => {
        dispatch({ type: LOGIN_IN_PROGRESS });
        const resource = new AuthResource(gateway);
        const response = await resource.login(email, password);
        const data = await response.json();
        if (response.ok) {
            dispatch({
                type: LOGIN_SUCCESSFULLY,
                data,
            });
            if (isFunction(setToken)) {
                setToken(data.token);
            }
        } else {
            dispatch({
                type: LOGIN_WITH_ERRORS,
                data,
            });
        }
    };
