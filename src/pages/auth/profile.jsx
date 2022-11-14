import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Layout from '../../layouts/layout';
import BlockContainer from '../../components/General/BlockContainer/BlockContainer';
import useToken from '../../hooks/useToken';

import { logout } from '../../actions/auth/actions';
import { getProfile } from '../../actions/user/actions';

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
        <Layout
            title="Profile • Animeapp"
            layoutClass="profile-layout"
            mainContentClasses={['profile-page']}
        >
            <BlockContainer></BlockContainer>
        </Layout>
    );
}

export default ProfilePage;
