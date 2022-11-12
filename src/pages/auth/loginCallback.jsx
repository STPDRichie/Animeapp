import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import useToken from '../../hooks/useToken';

import { loginCallback } from '../../actions/auth/actions';

function LoginCallbackPage() {
    const dispatch = useDispatch();

    const { setToken } = useToken();

    const [urlInfo, setUrlInfo] = useState();

    useEffect(() => {
        if (urlInfo) {
            dispatch(loginCallback(urlInfo, (token) => setToken(token)));
        }
    }, [urlInfo]);

    useEffect(() => {
        document.title = 'Login Callback • Animeapp';
    }, []);

    useEffect(() => {
        if (window.location.href.split('#').length === 2) {
            const params = window.location.href.split('#')[1].split('&');
            const data = Object.assign(
                {},
                ...params.map((param) => {
                    const keyValue = param.split('=');
                    return { [keyValue[0]]: keyValue[1] };
                }),
            );
            setUrlInfo(data);
        }
    }, []);

    return (
        <div className="login-callback-page">
            <div className="login-callback-page__title">
                Please wait a second ...
            </div>
        </div>
    );
}

export default LoginCallbackPage;
