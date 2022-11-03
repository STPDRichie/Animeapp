import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Input from '../components/General/Input';
import ImageWithTitleCard from '../components/AnimeCard/ImageWithTitleCard';

import { searchAnime } from '../actions/homePage/actions';

function HomePage() {
    const dispatch = useDispatch();

    const { searchResult } = useSelector((state) => state.homePage);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        document.title = 'Animeapp – Главная';
        dispatch(searchAnime(searchQuery));
    }, [searchQuery]);

    return (
        <div className="home-page">
            <Input value={searchQuery} onChange={setSearchQuery} />
            {searchResult &&
                searchResult.entities &&
                searchResult.entities.length > 0 && (
                    <div className="search-block">
                        <div className="search__count">
                            Всего {searchResult.count}
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
