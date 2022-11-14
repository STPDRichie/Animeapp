import PropTypes from 'prop-types';

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
