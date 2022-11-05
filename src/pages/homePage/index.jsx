import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Input from '../../components/General/Input/Input';
import ImageWithTitleCard from '../../components/AnimeCard/ImageWithTitleCard';

import {
    fetchPopular,
    initSearchAnime,
    searchAnime,
} from '../../actions/homePage/actions';

const popular = {
    count: 8,
    entities: [
        {
            averageScore: 79,
            bannerImage:
                'https://s4.anilist.co/file/anilistcdn/media/anime/banner/20-HHxhPj5JD13a.jpg',
            coverImage: {
                color: '#e47850',
                medium: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx20-YJvLbgJQPCoI.jpg',
            },
            description:
                "Naruto Uzumaki, a hyperactive and knuckle-headed ninja, lives in Konohagakure, the Hidden Leaf village. Moments prior to his birth, a huge demon known as the Kyuubi, the Nine-tailed Fox, attacked Konohagakure and wreaked havoc. In order to put an end to the Kyuubi's rampage, the leader of the village, the 4th Hokage, sacrificed his life and sealed the monstrous beast inside the newborn Naruto. <br><br>\nShunned because of the presence of the Kyuubi inside him, Naruto struggles to find his place in the village. He strives to become the Hokage of Konohagakure, and he meets many friends and foes along the way. <br><br>\n(Source: MAL Rewrite)",
            duration: 23,
            endDate: {
                day: 8,
                month: 2,
                year: 2007,
            },
            episodes: 220,
            format: 'TV',
            genres: [
                'Action',
                'Adventure',
                'Comedy',
                'Drama',
                'Fantasy',
                'Supernatural',
            ],
            id: 20,
            idMal: 20,
            isAdult: false,
            popularity: 434240,
            season: 'FALL',
            seasonYear: 2002,
            source: 'MANGA',
            startDate: {
                day: 3,
                month: 10,
                year: 2002,
            },
            status: 'FINISHED',
            tags: [
                {
                    id: 255,
                    name: 'Ninja',
                },
                {
                    id: 56,
                    name: 'Shounen',
                },
                {
                    id: 102,
                    name: 'Coming of Age',
                },
            ],
            title: {
                english: 'Naruto',
                native: 'NARUTO -ナルト-',
                romaji: 'NARUTO',
            },
        },
        {
            averageScore: 79,
            bannerImage:
                'https://s4.anilist.co/file/anilistcdn/media/anime/banner/20-HHxhPj5JD13a.jpg',
            coverImage: {
                color: '#e47850',
                medium: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx20-YJvLbgJQPCoI.jpg',
            },
            description:
                "Naruto Uzumaki, a hyperactive and knuckle-headed ninja, lives in Konohagakure, the Hidden Leaf village. Moments prior to his birth, a huge demon known as the Kyuubi, the Nine-tailed Fox, attacked Konohagakure and wreaked havoc. In order to put an end to the Kyuubi's rampage, the leader of the village, the 4th Hokage, sacrificed his life and sealed the monstrous beast inside the newborn Naruto. <br><br>\nShunned because of the presence of the Kyuubi inside him, Naruto struggles to find his place in the village. He strives to become the Hokage of Konohagakure, and he meets many friends and foes along the way. <br><br>\n(Source: MAL Rewrite)",
            duration: 23,
            endDate: {
                day: 8,
                month: 2,
                year: 2007,
            },
            episodes: 220,
            format: 'TV',
            genres: [
                'Action',
                'Adventure',
                'Comedy',
                'Drama',
                'Fantasy',
                'Supernatural',
            ],
            id: 20,
            idMal: 20,
            isAdult: false,
            popularity: 434240,
            season: 'FALL',
            seasonYear: 2002,
            source: 'MANGA',
            startDate: {
                day: 3,
                month: 10,
                year: 2002,
            },
            status: 'FINISHED',
            tags: [
                {
                    id: 255,
                    name: 'Ninja',
                },
                {
                    id: 56,
                    name: 'Shounen',
                },
                {
                    id: 102,
                    name: 'Coming of Age',
                },
            ],
            title: {
                english: 'Naruto',
                native: 'NARUTO -ナルト-',
                romaji: 'NARUTO',
            },
        },
        {
            averageScore: 79,
            bannerImage:
                'https://s4.anilist.co/file/anilistcdn/media/anime/banner/20-HHxhPj5JD13a.jpg',
            coverImage: {
                color: '#e47850',
                medium: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx20-YJvLbgJQPCoI.jpg',
            },
            description:
                "Naruto Uzumaki, a hyperactive and knuckle-headed ninja, lives in Konohagakure, the Hidden Leaf village. Moments prior to his birth, a huge demon known as the Kyuubi, the Nine-tailed Fox, attacked Konohagakure and wreaked havoc. In order to put an end to the Kyuubi's rampage, the leader of the village, the 4th Hokage, sacrificed his life and sealed the monstrous beast inside the newborn Naruto. <br><br>\nShunned because of the presence of the Kyuubi inside him, Naruto struggles to find his place in the village. He strives to become the Hokage of Konohagakure, and he meets many friends and foes along the way. <br><br>\n(Source: MAL Rewrite)",
            duration: 23,
            endDate: {
                day: 8,
                month: 2,
                year: 2007,
            },
            episodes: 220,
            format: 'TV',
            genres: [
                'Action',
                'Adventure',
                'Comedy',
                'Drama',
                'Fantasy',
                'Supernatural',
            ],
            id: 20,
            idMal: 20,
            isAdult: false,
            popularity: 434240,
            season: 'FALL',
            seasonYear: 2002,
            source: 'MANGA',
            startDate: {
                day: 3,
                month: 10,
                year: 2002,
            },
            status: 'FINISHED',
            tags: [
                {
                    id: 255,
                    name: 'Ninja',
                },
                {
                    id: 56,
                    name: 'Shounen',
                },
                {
                    id: 102,
                    name: 'Coming of Age',
                },
            ],
            title: {
                english: 'Naruto',
                native: 'NARUTO -ナルト-',
                romaji: 'NARUTO',
            },
        },
        {
            averageScore: 79,
            bannerImage:
                'https://s4.anilist.co/file/anilistcdn/media/anime/banner/20-HHxhPj5JD13a.jpg',
            coverImage: {
                color: '#e47850',
                medium: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx20-YJvLbgJQPCoI.jpg',
            },
            description:
                "Naruto Uzumaki, a hyperactive and knuckle-headed ninja, lives in Konohagakure, the Hidden Leaf village. Moments prior to his birth, a huge demon known as the Kyuubi, the Nine-tailed Fox, attacked Konohagakure and wreaked havoc. In order to put an end to the Kyuubi's rampage, the leader of the village, the 4th Hokage, sacrificed his life and sealed the monstrous beast inside the newborn Naruto. <br><br>\nShunned because of the presence of the Kyuubi inside him, Naruto struggles to find his place in the village. He strives to become the Hokage of Konohagakure, and he meets many friends and foes along the way. <br><br>\n(Source: MAL Rewrite)",
            duration: 23,
            endDate: {
                day: 8,
                month: 2,
                year: 2007,
            },
            episodes: 220,
            format: 'TV',
            genres: [
                'Action',
                'Adventure',
                'Comedy',
                'Drama',
                'Fantasy',
                'Supernatural',
            ],
            id: 20,
            idMal: 20,
            isAdult: false,
            popularity: 434240,
            season: 'FALL',
            seasonYear: 2002,
            source: 'MANGA',
            startDate: {
                day: 3,
                month: 10,
                year: 2002,
            },
            status: 'FINISHED',
            tags: [
                {
                    id: 255,
                    name: 'Ninja',
                },
                {
                    id: 56,
                    name: 'Shounen',
                },
                {
                    id: 102,
                    name: 'Coming of Age',
                },
            ],
            title: {
                english: 'Naruto',
                native: 'NARUTO -ナルト-',
                romaji: 'NARUTO',
            },
        },
        {
            averageScore: 79,
            bannerImage:
                'https://s4.anilist.co/file/anilistcdn/media/anime/banner/20-HHxhPj5JD13a.jpg',
            coverImage: {
                color: '#e47850',
                medium: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx20-YJvLbgJQPCoI.jpg',
            },
            description:
                "Naruto Uzumaki, a hyperactive and knuckle-headed ninja, lives in Konohagakure, the Hidden Leaf village. Moments prior to his birth, a huge demon known as the Kyuubi, the Nine-tailed Fox, attacked Konohagakure and wreaked havoc. In order to put an end to the Kyuubi's rampage, the leader of the village, the 4th Hokage, sacrificed his life and sealed the monstrous beast inside the newborn Naruto. <br><br>\nShunned because of the presence of the Kyuubi inside him, Naruto struggles to find his place in the village. He strives to become the Hokage of Konohagakure, and he meets many friends and foes along the way. <br><br>\n(Source: MAL Rewrite)",
            duration: 23,
            endDate: {
                day: 8,
                month: 2,
                year: 2007,
            },
            episodes: 220,
            format: 'TV',
            genres: [
                'Action',
                'Adventure',
                'Comedy',
                'Drama',
                'Fantasy',
                'Supernatural',
            ],
            id: 20,
            idMal: 20,
            isAdult: false,
            popularity: 434240,
            season: 'FALL',
            seasonYear: 2002,
            source: 'MANGA',
            startDate: {
                day: 3,
                month: 10,
                year: 2002,
            },
            status: 'FINISHED',
            tags: [
                {
                    id: 255,
                    name: 'Ninja',
                },
                {
                    id: 56,
                    name: 'Shounen',
                },
                {
                    id: 102,
                    name: 'Coming of Age',
                },
            ],
            title: {
                english: 'Naruto',
                native: 'NARUTO -ナルト-',
                romaji: 'NARUTO',
            },
        },
        {
            averageScore: 79,
            bannerImage:
                'https://s4.anilist.co/file/anilistcdn/media/anime/banner/20-HHxhPj5JD13a.jpg',
            coverImage: {
                color: '#e47850',
                medium: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx20-YJvLbgJQPCoI.jpg',
            },
            description:
                "Naruto Uzumaki, a hyperactive and knuckle-headed ninja, lives in Konohagakure, the Hidden Leaf village. Moments prior to his birth, a huge demon known as the Kyuubi, the Nine-tailed Fox, attacked Konohagakure and wreaked havoc. In order to put an end to the Kyuubi's rampage, the leader of the village, the 4th Hokage, sacrificed his life and sealed the monstrous beast inside the newborn Naruto. <br><br>\nShunned because of the presence of the Kyuubi inside him, Naruto struggles to find his place in the village. He strives to become the Hokage of Konohagakure, and he meets many friends and foes along the way. <br><br>\n(Source: MAL Rewrite)",
            duration: 23,
            endDate: {
                day: 8,
                month: 2,
                year: 2007,
            },
            episodes: 220,
            format: 'TV',
            genres: [
                'Action',
                'Adventure',
                'Comedy',
                'Drama',
                'Fantasy',
                'Supernatural',
            ],
            id: 20,
            idMal: 20,
            isAdult: false,
            popularity: 434240,
            season: 'FALL',
            seasonYear: 2002,
            source: 'MANGA',
            startDate: {
                day: 3,
                month: 10,
                year: 2002,
            },
            status: 'FINISHED',
            tags: [
                {
                    id: 255,
                    name: 'Ninja',
                },
                {
                    id: 56,
                    name: 'Shounen',
                },
                {
                    id: 102,
                    name: 'Coming of Age',
                },
            ],
            title: {
                english: 'Naruto',
                native: 'NARUTO -ナルト-',
                romaji: 'NARUTO',
            },
        },
        {
            averageScore: 79,
            bannerImage:
                'https://s4.anilist.co/file/anilistcdn/media/anime/banner/20-HHxhPj5JD13a.jpg',
            coverImage: {
                color: '#e47850',
                medium: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx20-YJvLbgJQPCoI.jpg',
            },
            description:
                "Naruto Uzumaki, a hyperactive and knuckle-headed ninja, lives in Konohagakure, the Hidden Leaf village. Moments prior to his birth, a huge demon known as the Kyuubi, the Nine-tailed Fox, attacked Konohagakure and wreaked havoc. In order to put an end to the Kyuubi's rampage, the leader of the village, the 4th Hokage, sacrificed his life and sealed the monstrous beast inside the newborn Naruto. <br><br>\nShunned because of the presence of the Kyuubi inside him, Naruto struggles to find his place in the village. He strives to become the Hokage of Konohagakure, and he meets many friends and foes along the way. <br><br>\n(Source: MAL Rewrite)",
            duration: 23,
            endDate: {
                day: 8,
                month: 2,
                year: 2007,
            },
            episodes: 220,
            format: 'TV',
            genres: [
                'Action',
                'Adventure',
                'Comedy',
                'Drama',
                'Fantasy',
                'Supernatural',
            ],
            id: 20,
            idMal: 20,
            isAdult: false,
            popularity: 434240,
            season: 'FALL',
            seasonYear: 2002,
            source: 'MANGA',
            startDate: {
                day: 3,
                month: 10,
                year: 2002,
            },
            status: 'FINISHED',
            tags: [
                {
                    id: 255,
                    name: 'Ninja',
                },
                {
                    id: 56,
                    name: 'Shounen',
                },
                {
                    id: 102,
                    name: 'Coming of Age',
                },
            ],
            title: {
                english: 'Naruto',
                native: 'NARUTO -ナルト-',
                romaji: 'NARUTO',
            },
        },
        {
            averageScore: 79,
            bannerImage:
                'https://s4.anilist.co/file/anilistcdn/media/anime/banner/20-HHxhPj5JD13a.jpg',
            coverImage: {
                color: '#e47850',
                medium: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx20-YJvLbgJQPCoI.jpg',
            },
            description:
                "Naruto Uzumaki, a hyperactive and knuckle-headed ninja, lives in Konohagakure, the Hidden Leaf village. Moments prior to his birth, a huge demon known as the Kyuubi, the Nine-tailed Fox, attacked Konohagakure and wreaked havoc. In order to put an end to the Kyuubi's rampage, the leader of the village, the 4th Hokage, sacrificed his life and sealed the monstrous beast inside the newborn Naruto. <br><br>\nShunned because of the presence of the Kyuubi inside him, Naruto struggles to find his place in the village. He strives to become the Hokage of Konohagakure, and he meets many friends and foes along the way. <br><br>\n(Source: MAL Rewrite)",
            duration: 23,
            endDate: {
                day: 8,
                month: 2,
                year: 2007,
            },
            episodes: 220,
            format: 'TV',
            genres: [
                'Action',
                'Adventure',
                'Comedy',
                'Drama',
                'Fantasy',
                'Supernatural',
            ],
            id: 20,
            idMal: 20,
            isAdult: false,
            popularity: 434240,
            season: 'FALL',
            seasonYear: 2002,
            source: 'MANGA',
            startDate: {
                day: 3,
                month: 10,
                year: 2002,
            },
            status: 'FINISHED',
            tags: [
                {
                    id: 255,
                    name: 'Ninja',
                },
                {
                    id: 56,
                    name: 'Shounen',
                },
                {
                    id: 102,
                    name: 'Coming of Age',
                },
            ],
            title: {
                english: 'Naruto',
                native: 'NARUTO -ナルト-',
                romaji: 'NARUTO',
            },
        },
    ],
};

function HomePage() {
    const dispatch = useDispatch();

    const { searchResult } = useSelector((state) => state.homePage);
    const [searchQuery, setSearchQuery] = useState();

    useEffect(() => {
        document.title = 'Animeapp – Главная';
    }, []);

    useEffect(() => {
        if (searchQuery) {
            dispatch(searchAnime(searchQuery));
        } else {
            dispatch(initSearchAnime());
            dispatch(fetchPopular());
        }
    }, [searchQuery]);

    return (
        <div className="home-page">
            <Input value={searchQuery} onChange={setSearchQuery} />
            {popular && popular.entities && !searchResult && (
                <div className="popular-block">
                    <div className="popular__count">Популярные</div>
                    <div className="popular__entities">
                        {popular.entities.map((entity, i) => (
                            <div
                                key={entity.id + i}
                                className="popular__entity"
                            >
                                <ImageWithTitleCard animeCard={entity} />
                            </div>
                        ))}
                    </div>
                </div>
            )}
            {searchResult && searchResult.entities && (
                <div className="search-block">
                    <div className="search__count">
                        Всего найдено {searchResult.count} аниме
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
