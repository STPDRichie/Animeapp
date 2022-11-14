import {
    PROFILE_IN_PROGRESS,
    PROFILE_SUCCESSFULLY,
    PROFILE_WITH_ERRORS,
    USER_ANIME_LISTS_IN_PROGRESS,
    USER_ANIME_LISTS_SUCCESSFULLY,
    USER_ANIME_LISTS_WITH_ERRORS,
    USER_ANIME_LISTS_CHANGED,
    ADD_ANIME_TO_LIST_SUCCESSFULLY,
    DELETE_ANIME_FROM_LISTS_SUCCESSFULLY,
    CHANGE_ANIME_STATUS_SUCCESSFULLY,
} from '../actions/user/actionTypes';

export default () => {
    const defaultState = {
        user: null,
        userInProgress: true,
        animeLists: {
            watching: null,
            completed: null,
            planning: null,
            paused: null,
            dropped: null,
        },
        animeListsInProgress: true,
        listsChanged: false,
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
                            [listName]: {
                                count: list.entries.length,
                                entities: list.entries.map(
                                    (entry) => entry.media,
                                ),
                            },
                        };
                    }),
                );
                return {
                    ...state,
                    animeLists: {
                        ...data,
                    },
                    animeListsInProgress: false,
                };
            }
            case USER_ANIME_LISTS_IN_PROGRESS: {
                return {
                    ...state,
                    animeListsInProgress: true,
                };
            }
            case USER_ANIME_LISTS_WITH_ERRORS: {
                return {
                    ...state,
                    animeListsInProgress: false,
                };
            }
            case USER_ANIME_LISTS_CHANGED: {
                return {
                    ...state,
                    listsChanged: false,
                };
            }
            case ADD_ANIME_TO_LIST_SUCCESSFULLY: {
                return {
                    ...state,
                    listsChanged: true,
                };
            }
            case DELETE_ANIME_FROM_LISTS_SUCCESSFULLY: {
                return {
                    ...state,
                    listsChanged: true,
                };
            }
            case CHANGE_ANIME_STATUS_SUCCESSFULLY: {
                return {
                    ...state,
                    listsChanged: true,
                };
            }
            default:
                return state;
        }
    };
};
