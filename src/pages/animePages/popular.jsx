import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Layout from '../../layouts/layout';
import BlockContainer from '../../components/General/BlockContainer/BlockContainer';
import ImageWithTitleCard from '../../components/AnimeCard/ImageWithTitleCard';
import ItemsBlock from '../../components/ItemsBlock/ItemsBlock';

import { fetchAnimeList } from '../../actions/animePages/actions';

function PopularPage() {
    const dispatch = useDispatch();

    const { popular } = useSelector((state) => state.animePages);

    const [currentPage, setCurrentPage] = useState(1);

    const onChangePage = (callback) => {
        setCurrentPage(currentPage + 1);
        dispatch(fetchAnimeList('popular', currentPage, () => callback()));
    };

    useEffect(() => {
        dispatch(
            fetchAnimeList('popular', currentPage, () => setCurrentPage(2)),
        );
    }, []);

    return (
        <Layout
            title="All-Time Popular • Animeapp"
            mainContentClasses={['popular-page']}
        >
            <BlockContainer>
                <div className="popular-page__title anime-page__title">
                    All-Time Popular Anime
                </div>
                <ItemsBlock
                    name="popular"
                    items={popular}
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

export default PopularPage;
