import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Layout from '../../layouts/layout';
import BlockContainer from '../../components/General/BlockContainer/BlockContainer';
import Button from '../../components/General/Button/Button';
import ItemsBlock from '../../components/ItemsBlock/ItemsBlock';
import ImageWithTitleCard from '../../components/AnimeCard/ImageWithTitleCard';
import useToken from '../../hooks/useToken';

import { logout } from '../../actions/auth/actions';
import {
    getProfile,
    getUserAnimeLists,
    initUserAnimeLists,
} from '../../actions/user/actions';

function ProfilePage() {
    const dispatch = useDispatch();

    const { removeToken } = useToken();

    const { user, animeLists, listsChanged } = useSelector(
        (state) => state.user,
    );

    const { watching, completed, planning, paused, dropped } = animeLists;

    const itemsBlockProps = {
        itemInstance: (entity) => <ImageWithTitleCard animeCard={entity} />,
        loadersCount: 5,
        itemLoader: () => (
            <div className="image-with-title-card">
                <div className="image-with-title-card__image-wrapper image-wrapper__loader" />
                <div className="image-with-title-card__title title__loader" />
            </div>
        ),
    };

    const onLogout = () => {
        dispatch(logout(removeToken));
    };

    useEffect(() => {
        if (listsChanged) {
            dispatch(initUserAnimeLists());
            dispatch(getUserAnimeLists(user.id));
        }
    }, [listsChanged]);

    useEffect(() => {
        if (user) {
            dispatch(getUserAnimeLists(user.id));
        }
    }, [user]);

    useEffect(() => {
        dispatch(getProfile());
    }, []);

    return (
        <Layout
            title={`${(user && user.name) || 'Profile'} • Animeapp`}
            layoutClass="profile-layout"
            mainContentClasses={['profile-page']}
        >
            {user && (
                <React.Fragment>
                    <div
                        className="profile__user-info"
                        style={{ backgroundImage: `url(${user.bannerImage})` }}
                    >
                        <BlockContainer>
                            <div className="profile__info-block">
                                <div className="profile__avatar-wrapper">
                                    <img src={user.avatar.large} />
                                </div>
                                <div className="profile__user-name">
                                    {user.name}
                                </div>
                            </div>
                            <div className="profile__header-buttons">
                                <Button onClick={onLogout}>Logout</Button>
                            </div>
                        </BlockContainer>
                    </div>
                    <BlockContainer classes={['anime-container']}>
                        <div className="profile-page__page-title">
                            Anime List
                        </div>
                        <ItemsBlock
                            name="watching"
                            title={
                                <React.Fragment>
                                    Watching{' '}
                                    <span>{watching && watching.count}</span>
                                </React.Fragment>
                            }
                            items={watching}
                            {...itemsBlockProps}
                        />
                        <ItemsBlock
                            name="completed"
                            title={
                                <React.Fragment>
                                    Completed{' '}
                                    <span>{completed && completed.count}</span>
                                </React.Fragment>
                            }
                            items={completed}
                            {...itemsBlockProps}
                        />
                        <ItemsBlock
                            name="planning"
                            title={
                                <React.Fragment>
                                    Planning{' '}
                                    <span>{planning && planning.count}</span>
                                </React.Fragment>
                            }
                            items={planning}
                            {...itemsBlockProps}
                        />
                        <ItemsBlock
                            name="paused"
                            title={
                                <React.Fragment>
                                    Paused <span>{paused && paused.count}</span>
                                </React.Fragment>
                            }
                            items={paused}
                            {...itemsBlockProps}
                        />
                        <ItemsBlock
                            name="dropped"
                            title={
                                <React.Fragment>
                                    Dropped{' '}
                                    <span>{dropped && dropped.count}</span>
                                </React.Fragment>
                            }
                            items={dropped}
                            {...itemsBlockProps}
                        />
                    </BlockContainer>
                </React.Fragment>
            )}
        </Layout>
    );
}

export default ProfilePage;
