import PropTypes from 'prop-types';

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
    status: PropTypes.string,
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
    }),
});
