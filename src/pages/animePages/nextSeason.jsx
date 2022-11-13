import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Layout from '../../layouts/layout';
import BlockContainer from '../../components/General/BlockContainer/BlockContainer';
import ImageWithTitleCard from '../../components/AnimeCard/ImageWithTitleCard';
import ItemsBlock from '../../components/ItemsBlock/ItemsBlock';

import { fetchAnimeList } from '../../actions/animePages/actions';

function NextSeasonPage() {
    const dispatch = useDispatch();

    const { nextSeason, pageTitle } = useSelector((state) => state.animePages);

    const [currentPage, setCurrentPage] = useState(1);

    const onChangePage = (callback) => {
        setCurrentPage(currentPage + 1);
        dispatch(fetchAnimeList('nextSeason', currentPage, () => callback()));
    };

    useEffect(() => {
        dispatch(
            fetchAnimeList('nextSeason', currentPage, () => setCurrentPage(2)),
        );
    }, []);

    return (
        <Layout
            title={`${pageTitle || 'Next Season'} • Animeapp`}
            mainContentClasses={['next-season-page']}
        >
            <BlockContainer>
                <div className="next-season-page__title anime-page__title">
                    {pageTitle || 'Next Season Anime'}
                </div>
                <ItemsBlock
                    name="next-season"
                    items={nextSeason}
                    itemInstance={(entity) => (
                        <ImageWithTitleCard animeCard={entity} />
                    )}
                    loadersCount={10}
                    itemLoader={() => (
                        <div className="image-with-title-card">
                            <div className="image-with-title-card__image-wrapper image-wrapper__loader" />
                            <div className="image-with-title-card__title title__loader" />
                        </div>
                    )}
                    needInfiniteScroll={true}
                    infiniteScrollCallback={onChangePage}
                />
            </BlockContainer>
        </Layout>
    );
}

export default NextSeasonPage;
