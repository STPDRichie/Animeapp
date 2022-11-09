import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Layout from '../../layouts/layout';
import BlockContainer from '../../components/General/BlockContainer/BlockContainer';
import HorizontalContainer from '../../components/General/HorizontalContainer/HorizontalContainer';
import Input from '../../components/General/Input/Input';
import ImageWithTitleCard from '../../components/AnimeCard/ImageWithTitleCard';
import ItemsBlock from '../../components/ItemsBlock/ItemsBlock';

import {
    fetchHomePageAnime,
    initSearchAnime,
    searchAnime,
} from '../../actions/homePage/actions';

function HomePage() {
    const dispatch = useDispatch();

    const { trending, season, nextSeason, popular, top, searchResult } =
        useSelector((state) => state.homePage);

    const [searchQuery, setSearchQuery] = useState();

    useEffect(() => {
        if (searchQuery) {
            dispatch(searchAnime(searchQuery));
        } else {
            dispatch(initSearchAnime());
            if (!trending) {
                dispatch(fetchHomePageAnime());
            }
        }
    }, [searchQuery]);

    return (
        <Layout title="Animeapp – Главная" mainContentClasses={['home-page']}>
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
                <ItemsBlock
                    name="search"
                    items={searchResult}
                    itemsInProgress={false}
                    itemInstance={(entity) => (
                        <ImageWithTitleCard animeCard={entity} />
                    )}
                />
                {!searchResult && (
                    <React.Fragment>
                        <ItemsBlock
                            name="trending"
                            title="Trending now"
                            viewAllLink="/trending"
                            items={trending}
                            itemsInProgress={false}
                            itemInstance={(entity) => (
                                <ImageWithTitleCard animeCard={entity} />
                            )}
                        />
                        <ItemsBlock
                            name="season"
                            title="Popular this season"
                            viewAllLink="/season"
                            items={season}
                            itemsInProgress={false}
                            itemInstance={(entity) => (
                                <ImageWithTitleCard animeCard={entity} />
                            )}
                        />
                        <ItemsBlock
                            name="next-season"
                            title="Upcoming next season"
                            viewAllLink="/next-season"
                            items={nextSeason}
                            itemsInProgress={false}
                            itemInstance={(entity) => (
                                <ImageWithTitleCard animeCard={entity} />
                            )}
                        />
                        <ItemsBlock
                            name="popular"
                            title="All time popular"
                            viewAllLink="/popular"
                            items={popular}
                            itemsInProgress={false}
                            itemInstance={(entity) => (
                                <ImageWithTitleCard animeCard={entity} />
                            )}
                        />
                        <ItemsBlock
                            name="top"
                            title="Top 10 anime"
                            viewAllLink="/top"
                            items={top}
                            itemsInProgress={false}
                            itemInstance={(entity) => (
                                <ImageWithTitleCard animeCard={entity} />
                            )}
                        />
                    </React.Fragment>
                )}
            </BlockContainer>
        </Layout>
    );
}

export default HomePage;
