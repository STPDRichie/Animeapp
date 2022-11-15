import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import Layout from '../../layouts/layout';
import BlockContainer from '../../components/General/BlockContainer/BlockContainer';
import Button from '../../components/General/Button/Button';

import { fetchFullAnimeInfo } from '../../actions/media/actions';

function AnimePage() {
    const { mediaId } = useParams();

    const dispatch = useDispatch();

    const { media, mediaInProgress, userInfo } = useSelector(
        (state) => state.media,
    );

    useEffect(() => {
        console.log(mediaId);
        dispatch(fetchFullAnimeInfo(mediaId));
    }, []);

    return (
        <Layout
            title={`${
                (media && media.title && media.title.userPreferred) || 'Anime'
            } • Animeapp`}
            layoutClass="anime-layout"
            mainContentClasses={['anime-page']}
        >
            {media && (
                <React.Fragment>
                    <div
                        className="anime__banner"
                        style={{ backgroundImage: `url(${media.bannerImage})` }}
                    />
                    <BlockContainer></BlockContainer>
                </React.Fragment>
            )}
        </Layout>
    );
}

export default AnimePage;
