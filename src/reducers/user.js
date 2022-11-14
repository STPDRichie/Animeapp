import {
    PROFILE_IN_PROGRESS,
    PROFILE_SUCCESSFULLY,
    PROFILE_WITH_ERRORS,
    USER_ANIME_LISTS_IN_PROGRESS,
    USER_ANIME_LISTS_SUCCESSFULLY,
    USER_ANIME_LISTS_WITH_ERRORS,
} from '../actions/user/actionTypes';

export default () => {
    const defaultState = {
        user: null,
        userInProgress: true,
        animeLists: {
            watching: null,
            completed: null,
            paused: null,
            dropped: null,
            planning: null,
        },
        animeListsInProgress: true,
    };

    return (state = defaultState, action) => {
        switch (action.type) {
            case PROFILE_SUCCESSFULLY: {
                const { Viewer } = action.data.data;
                return {
                    ...state,
                    user: Viewer,
                    userInProgress: false,
                };
            }
            case PROFILE_IN_PROGRESS: {
                return {
                    ...state,
                    user: null,
                    userInProgress: true,
                };
            }
            case PROFILE_WITH_ERRORS: {
                return {
                    ...state,
                    userInProgress: false,
                };
            }
            case USER_ANIME_LISTS_SUCCESSFULLY: {
                const { lists } = action.data.data.MediaListCollection;
                const data = Object.assign(
                    {},
                    ...lists.map((list) => {
                        const listName = list.name.toLowerCase();
                        return {
                            [listName]: list.entries.map(
                                (entry) => entry.media,
                            ),
                        };
                    }),
                );
                return {
                    ...state,
                    ...data,
                    animeListsInProgress: false,
                };
            }
            case USER_ANIME_LISTS_IN_PROGRESS: {
                return {
                    ...state,
                    animeLists: defaultState.animeLists,
                    animeListsInProgress: true,
                };
            }
            case USER_ANIME_LISTS_WITH_ERRORS: {
                return {
                    ...state,
                    animeListsInProgress: false,
                };
            }
            default:
                return state;
        }
    };
};
