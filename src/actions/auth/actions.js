import { isFunction, locate } from '../../utils/functions';
import {
    SIGNUP_IN_PROGRESS,
    SIGNUP_SUCCESSFULLY,
    SIGNUP_WITH_ERRORS,
    LOGIN_IN_PROGRESS,
    LOGIN_SUCCESSFULLY,
    LOGIN_WITH_ERRORS,
    LOGIN_CALLBACK_IN_PROGRESS,
    LOGIN_CALLBACK_SUCCESSFULLY,
    LOGIN_CALLBACK_WITH_ERRORS,
    LOGOUT_IN_PROGRESS,
    LOGOUT_SUCCESSFULLY,
    LOGOUT_WITH_ERRORS,
} from './actionTypes';

import AuthResource from '../../gateway/resources/auth';

export const signup =
    ({ name, email, password }, callback) =>
    async (dispatch) => {
        dispatch({ type: SIGNUP_IN_PROGRESS });
        const resource = new AuthResource();
        const response = await resource.signup(name, email, password);
        const data = await response.json();
        if (response.ok && !data.errors) {
            dispatch({
                type: SIGNUP_SUCCESSFULLY,
                data,
            });
            if (isFunction(callback)) {
                callback();
            }
        } else {
            dispatch({
                type: SIGNUP_WITH_ERRORS,
                data,
            });
        }
    };

export const login =
    ({ email, password }) =>
    async (dispatch) => {
        dispatch({ type: LOGIN_IN_PROGRESS });
        const resource = new AuthResource();
        const response = await resource.login(email, password);
        const data = await response.json();
        if (response.ok && !data.errors) {
            dispatch({
                type: LOGIN_SUCCESSFULLY,
                data,
            });
            locate(data.url);
        } else {
            dispatch({
                type: LOGIN_WITH_ERRORS,
                data,
            });
        }
    };

export const loginCallback =
    ({ access_token, expires_in }, callback) =>
    async (dispatch) => {
        dispatch({ type: LOGIN_CALLBACK_IN_PROGRESS });
        const resource = new AuthResource();
        const response = await resource.loginCallback(access_token, expires_in);
        const data = await response.json();
        if (response.ok && !data.errors) {
            dispatch({
                type: LOGIN_CALLBACK_SUCCESSFULLY,
                data,
            });
            if (isFunction(callback)) {
                callback(data.token);
            }
            locate('/profile');
        } else {
            dispatch({
                type: LOGIN_CALLBACK_WITH_ERRORS,
                data,
            });
        }
    };

export const logout = (callback) => async (dispatch) => {
    dispatch({ type: LOGOUT_IN_PROGRESS });
    const resource = new AuthResource();
    const response = await resource.logout();
    const data = await response.json();
    if (response.ok && !data.errors) {
        dispatch({
            type: LOGOUT_SUCCESSFULLY,
            data,
        });
        if (isFunction(callback)) {
            callback();
        }
        locate('/');
    } else {
        dispatch({
            type: LOGOUT_WITH_ERRORS,
            data,
        });
    }
};
