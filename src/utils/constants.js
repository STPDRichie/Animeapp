import PropTypes from 'prop-types';

import vars from '../styles/vars.scss';

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

export const statusColorsMap = {
    [animeUserStatusesMap.CURRENT]: vars.blue,
    [animeUserStatusesMap.PLANNING]: vars.yellow,
    [animeUserStatusesMap.COMPLETED]: vars.green,
    [animeUserStatusesMap.DROPPED]: vars.red,
    [animeUserStatusesMap.PAUSED]: vars.orange,
    [animeUserStatusesMap.REPEATING]: vars.blueDim,
};

export const childrenProps = PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.array,
    PropTypes.string,
]);

export const userFormat = PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    about: PropTypes.string,
    avatar: PropTypes.shape({
        large: PropTypes.string,
    }),
    bannerImage: PropTypes.string,
    unreadNotificationCount: PropTypes.number,
    donatorTier: PropTypes.number,
    donatorBadge: PropTypes.string,
    moderatorRoles: PropTypes.array,
    options: PropTypes.shape({
        titleLanguage: PropTypes.string,
        staffNameLanguage: PropTypes.string,
        restrictMessagesToFollowing: PropTypes.bool,
        airingNotifications: PropTypes.bool,
        displayAdultContent: PropTypes.bool,
        profileColor: PropTypes.string,
        notificationOptions: PropTypes.shape({
            type: PropTypes.string,
            enabled: PropTypes.bool,
        }),
        disabledListActivity: PropTypes.shape({
            type: PropTypes.string,
            disabled: PropTypes.bool,
        }),
    }),
    mediaListOptions: PropTypes.shape({
        scoreFormat: PropTypes.string,
        rowOrder: PropTypes.string,
        animeList: PropTypes.shape({
            customLists: PropTypes.array,
            sectionOrder: PropTypes.array,
            splitCompletedSectionByFormat: PropTypes.bool,
            advancedScoring: PropTypes.array,
            advancedScoringEnabled: PropTypes.bool,
        }),
        mangaList: PropTypes.shape({
            customLists: PropTypes.array,
            sectionOrder: PropTypes.array,
            splitCompletedSectionByFormat: PropTypes.bool,
            advancedScoring: PropTypes.array,
            advancedScoringEnabled: PropTypes.bool,
        }),
    }),
});

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
        mediaId: PropTypes.number,
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
