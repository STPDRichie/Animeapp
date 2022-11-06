import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Input from '../../components/General/Input/Input';
import ImageWithTitleCard from '../../components/AnimeCard/ImageWithTitleCard';
import ItemsBlock from '../../components/ItemsBlock/ItemsBlock';

import useToken from '../../hooks/useToken';

import {
    fetchHomePageAnime,
    initSearchAnime,
    searchAnime,
} from '../../actions/homePage/actions';

function HomePage() {
    const dispatch = useDispatch();

    const { token } = useToken();
    const gateway = { url: '', token };

    const { trending, season, nextSeason, popular, top, searchResult } =
        useSelector((state) => state.homePage);
    const [searchQuery, setSearchQuery] = useState();

    useEffect(() => {
        document.title = 'Animeapp – Главная';
    }, []);

    useEffect(() => {
        if (searchQuery) {
            dispatch(searchAnime(searchQuery, gateway));
        } else {
            dispatch(initSearchAnime());
            if (!trending) {
                dispatch(fetchHomePageAnime(gateway));
            }
        }
    }, [searchQuery]);

    return (
        <div className="home-page">
            <Input value={searchQuery} onChange={setSearchQuery} />
            <ItemsBlock
                name="search"
                title={`Found this anime`}
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
        </div>
    );
}

export default HomePage;
