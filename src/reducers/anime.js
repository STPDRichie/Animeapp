import {
    FECTH_ANIME_INFO_IN_PROGRESS,
    FECTH_ANIME_INFO_SUCCESSFULLY,
    FECTH_ANIME_INFO_WITH_ERRORS,
} from '../actions/user/actionTypes';

export default () => {
    const defaultState = {
        anime: null,
        animeUserInfo: null,
        animeInProgress: true,
    };

    return (state = defaultState, action) => {
        switch (action.type) {
            case FECTH_ANIME_INFO_SUCCESSFULLY: {
                const { Media } = action.data.data;
                return {
                    ...state,
                    anime: Media,
                    animeUserInfo: Media.mediaListEntry,
                    animeInProgress: false,
                };
            }
            case FECTH_ANIME_INFO_IN_PROGRESS: {
                return {
                    ...state,
                    anime: null,
                    animeInProgress: true,
                };
            }
            case FECTH_ANIME_INFO_WITH_ERRORS: {
                return {
                    ...state,
                    animeInProgress: false,
                };
            }
            default:
                return state;
        }
    };
};
