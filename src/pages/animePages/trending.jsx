import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Layout from '../../layouts/layout';
import BlockContainer from '../../components/General/BlockContainer/BlockContainer';
import ImageWithTitleCard from '../../components/AnimeCard/ImageWithTitleCard';
import ItemsBlock from '../../components/ItemsBlock/ItemsBlock';

import { fetchAnimeList } from '../../actions/animePages/actions';

function TrendingPage() {
    const dispatch = useDispatch();

    const { trending } = useSelector((state) => state.animePages);

    const [currentPage, setCurrentPage] = useState(1);

    const onChangePage = (callback) => {
        setCurrentPage(currentPage + 1);
        dispatch(fetchAnimeList('trending', currentPage, () => callback()));
    };

    useEffect(() => {
        dispatch(
            fetchAnimeList('trending', currentPage, () => setCurrentPage(2)),
        );
    }, []);

    return (
        <Layout
            title="Trending • Animeapp"
            mainContentClasses={['trending-page']}
        >
            <BlockContainer>
                <div className="trending-page__title anime-page__title">
                    Trending Anime
                </div>
                <ItemsBlock
                    name="trending"
                    items={trending}
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

export default TrendingPage;
