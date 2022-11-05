import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Input from '../../components/General/Input/Input';
import ImageWithTitleCard from '../../components/AnimeCard/ImageWithTitleCard';

import {
    fetchTrending,
    initSearchAnime,
    searchAnime,
} from '../../actions/homePage/actions';

function HomePage() {
    const dispatch = useDispatch();

    const { trending, searchResult } = useSelector((state) => state.homePage);
    const [searchQuery, setSearchQuery] = useState();

    useEffect(() => {
        document.title = 'Animeapp – Главная';
    }, []);

    useEffect(() => {
        if (searchQuery) {
            dispatch(searchAnime(searchQuery));
        } else {
            dispatch(initSearchAnime());
            dispatch(fetchTrending());
        }
    }, [searchQuery]);

    return (
        <div className="home-page">
            <Input value={searchQuery} onChange={setSearchQuery} />
            {trending && trending.entities && !searchResult && (
                <div className="trending-block">
                    <div className="trending__title">Trending now</div>
                    <div className="trending__entities">
                        {trending.entities.map((entity) => (
                            <div key={entity.id} className="trending__entity">
                                <ImageWithTitleCard animeCard={entity} />
                            </div>
                        ))}
                    </div>
                </div>
            )}
            {searchResult && searchResult.entities && (
                <div className="search-block">
                    <div className="search__title">
                        Found {searchResult.count} anime
                    </div>
                    <div className="search__entities">
                        {searchResult.entities.map((entity) => (
                            <div key={entity.id} className="search__entity">
                                <ImageWithTitleCard animeCard={entity} />
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default HomePage;
