import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import useToken from '../../hooks/useToken';

import { logout, getProfile } from '../../actions/auth/actions';

function ProfilePage() {
    const dispatch = useDispatch();

    const { removeToken } = useToken();

    const logMeOut = () => {
        dispatch(logout(removeToken));
    };

    useEffect(() => {
        dispatch(getProfile());
    }, []);

    return (
        <React.Fragment>
            <h2>Profile</h2>
            <button onClick={logMeOut}>Logout</button>
        </React.Fragment>
    );
}

export default ProfilePage;
