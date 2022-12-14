import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Layout from '../../layouts/layout';
import BlockContainer from '../../components/General/BlockContainer/BlockContainer';
import HorizontalContainer from '../../components/General/HorizontalContainer/HorizontalContainer';
import Input from '../../components/General/Input/Input';
import ImageWithTitleCard from '../../components/AnimeCard/ImageWithTitleCard';
import ItemsBlock from '../../components/ItemsBlock/ItemsBlock';

import { useDebounce } from '../../hooks/useDebounce';
import {
    fetchHomePageAnime,
    initSearchAnime,
    searchAnime,
} from '../../actions/animePages/actions';

function HomePage() {
    const dispatch = useDispatch();

    const { trending, season, nextSeason, popular, top, searchResult } =
        useSelector((state) => state.animePages);

    const [searchQuery, setSearchQuery] = useState('');

    const search = useDebounce(async (query) => {
        dispatch(searchAnime(query));
    }, 500);

    useEffect(() => {
        if (searchQuery) {
            search(searchQuery);
        } else {
            dispatch(initSearchAnime());
            if (!trending) {
                dispatch(fetchHomePageAnime());
            }
        }
    }, [searchQuery]);

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

    return (
        <Layout title="Home • Animeapp" mainContentClasses={['home-page']}>
            <BlockContainer>
                <HorizontalContainer>
                    <Input
                        id="search"
                        name="search"
                        label="Search"
                        value={searchQuery}
                        onChange={setSearchQuery}
                    />
                </HorizontalContainer>
                {searchResult && (
                    <ItemsBlock
                        name="search"
                        items={searchResult}
                        {...itemsBlockProps}
                    />
                )}
                {!searchResult && (
                    <React.Fragment>
                        <ItemsBlock
                            name="trending"
                            title="Trending now"
                            viewAllLink="/trending"
                            items={trending}
                            {...itemsBlockProps}
                        />
                        <ItemsBlock
                            name="season"
                            title="Popular this season"
                            viewAllLink="/season"
                            items={season}
                            {...itemsBlockProps}
                        />
                        <ItemsBlock
                            name="next-season"
                            title="Upcoming next season"
                            viewAllLink="/next-season"
                            items={nextSeason}
                            {...itemsBlockProps}
                        />
                        <ItemsBlock
                            name="popular"
                            title="All time popular"
                            viewAllLink="/popular"
                            items={popular}
                            {...itemsBlockProps}
                        />
                        <ItemsBlock
                            name="top"
                            title="Top scored anime"
                            viewAllLink="/top"
                            items={top}
                            {...itemsBlockProps}
                        />
                    </React.Fragment>
                )}
            </BlockContainer>
        </Layout>
    );
}

export default HomePage;
