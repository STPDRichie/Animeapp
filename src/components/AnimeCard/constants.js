import PropTypes from 'prop-types';

import vars from '../../styles/vars.scss';

export const animeStatusesMap = {
    FINISHED: 'FINISHED',
    RELEASING: 'RELEASING',
    NOT_YET_RELEASED: 'NOT_YET_RELEASED',
    CANCELLED: 'CANCELLED',
    HIATUS: 'HIATUS',
};

export const animeUserStatusesMap = {
    CURRENT: 'CURRENT',
    PLANNING: 'PLANNING',
    COMPLETED: 'COMPLETED',
    DROPPED: 'DROPPED',
    PAUSED: 'PAUSED',
    REPEATING: 'REPEATING',
};

export const animeCardFormat = PropTypes.shape({
    averageScore: PropTypes.number,
    bannerImage: PropTypes.string,
    coverImage: PropTypes.shape({
        color: PropTypes.string,
        medium: PropTypes.string,
        large: PropTypes.string,
        extraLarge: PropTypes.string,
    }),
    description: PropTypes.string,
    duration: PropTypes.number,
    endDate: PropTypes.shape({
        day: PropTypes.number,
        month: PropTypes.number,
        year: PropTypes.number,
    }),
    episodes: PropTypes.number,
    format: PropTypes.string,
    genres: PropTypes.arrayOf(PropTypes.string),
    id: PropTypes.number,
    isAdult: PropTypes.bool,
    popularity: PropTypes.number,
    season: PropTypes.string,
    seasonYear: PropTypes.number,
    source: PropTypes.string,
    startDate: PropTypes.shape({
        day: PropTypes.number,
        month: PropTypes.number,
        year: PropTypes.number,
    }),
    status: PropTypes.oneOf([
        animeStatusesMap.FINISHED,
        animeStatusesMap.RELEASING,
        animeStatusesMap.NOT_YET_RELEASED,
        animeStatusesMap.CANCELLED,
        animeStatusesMap.HIATUS,
    ]),
    tags: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.string,
        }),
    ),
    title: PropTypes.shape({
        english: PropTypes.string,
        native: PropTypes.string,
        romaji: PropTypes.string,
        userPrefered: PropTypes.string,
    }),
    chapters: PropTypes.number,
    mediaListEntry: PropTypes.shape({
        id: PropTypes.number,
        status: PropTypes.oneOf([
            animeUserStatusesMap.CURRENT,
            animeUserStatusesMap.PLANNING,
            animeUserStatusesMap.COMPLETED,
            animeUserStatusesMap.DROPPED,
            animeUserStatusesMap.PAUSED,
            animeUserStatusesMap.REPEATING,
        ]),
        score: PropTypes.number,
        progress: PropTypes.number,
        startedAt: PropTypes.shape({
            day: PropTypes.number,
            month: PropTypes.number,
            year: PropTypes.number,
        }),
        completedAt: PropTypes.shape({
            day: PropTypes.number,
            month: PropTypes.number,
            year: PropTypes.number,
        }),
        repeat: PropTypes.number,
    }),
    type: PropTypes.string,
    volumes: PropTypes.number,
    nextAiringEpisode: PropTypes.shape({
        airingAt: PropTypes.number,
        episode: PropTypes.number,
        timeUntilAiring: PropTypes.number,
    }),
    studios: PropTypes.shape({
        edges: PropTypes.arrayOf(
            PropTypes.shape({
                isMain: PropTypes.bool,
                node: PropTypes.shape({
                    id: PropTypes.number,
                    name: PropTypes.string,
                }),
            }),
        ),
    }),
});

export const statusColorsMap = {
    [animeUserStatusesMap.CURRENT]: vars.blue,
    [animeUserStatusesMap.PLANNING]: vars.yellow,
    [animeUserStatusesMap.COMPLETED]: vars.green,
    [animeUserStatusesMap.DROPPED]: vars.red,
    [animeUserStatusesMap.PAUSED]: vars.orange,
    [animeUserStatusesMap.REPEATING]: vars.blueDim,
};
