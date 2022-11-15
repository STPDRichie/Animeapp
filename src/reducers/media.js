import {
    FETCH_FULL_ANIME_INFO_IN_PROGRESS,
    FETCH_FULL_ANIME_INFO_SUCCESSFULLY,
    FETCH_FULL_ANIME_INFO_WITH_ERRORS,
} from '../actions/media/actionTypes';

export default () => {
    const defaultState = {
        media: null,
        userInfo: null,
        mediaInProgress: true,
    };

    return (state = defaultState, action) => {
        switch (action.type) {
            case FETCH_FULL_ANIME_INFO_SUCCESSFULLY: {
                const { Media } = action.data.data;
                return {
                    ...state,
                    media: Media,
                    userInfo: Media.mediaListEntry,
                    mediaInProgress: false,
                };
            }
            case FETCH_FULL_ANIME_INFO_IN_PROGRESS: {
                return {
                    ...state,
                    mediaInProgress: true,
                };
            }
            case FETCH_FULL_ANIME_INFO_WITH_ERRORS: {
                return {
                    ...state,
                    mediaInProgress: false,
                };
            }
            default:
                return state;
        }
    };
};
