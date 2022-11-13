import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Layout from '../../layouts/layout';
import BlockContainer from '../../components/General/BlockContainer/BlockContainer';
import ImageWithTitleCard from '../../components/AnimeCard/ImageWithTitleCard';
import ItemsBlock from '../../components/ItemsBlock/ItemsBlock';

import { fetchHomePageAnime } from '../../actions/animePages/actions';

function TrendingPage() {
    const dispatch = useDispatch();

    const { trending } = useSelector((state) => state.animePages);

    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        dispatch(fetchHomePageAnime());
    }, []);

    useEffect(() => {
        console.log(`fetching ${currentPage} page`);
    }, [currentPage]);

    return (
        <Layout title="Trending • Animeapp" mainContentClasses={['home-page']}>
            <BlockContainer>
                <ItemsBlock
                    name="trending"
                    title="Trending anime"
                    items={trending}
                    itemInstance={(entity) => (
                        <ImageWithTitleCard animeCard={entity} />
                    )}
                    loadersCount={5}
                    itemLoader={() => (
                        <div className="image-with-title-card">
                            <div className="image-with-title-card__image-wrapper image-wrapper__loader" />
                            <div className="image-with-title-card__title title__loader" />
                        </div>
                    )}
                    needInfiniteScroll={true}
                    infiniteScrollCallback={() =>
                        setCurrentPage(currentPage + 1)
                    }
                />
            </BlockContainer>
        </Layout>
    );
}

export default TrendingPage;
