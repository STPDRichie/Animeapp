import {
    FETCH_POPULAR_IN_PROGRESS,
    FETCH_POPULAR_SUCCESSFULLY,
    FETCH_POPULAR_WITH_ERRORS,
} from '../actions/homePage/actionTypes';

export default () => {
    const defaultState = {
        popular: null,
        popularInProgress: false,
    };

    return (state = defaultState, action) => {
        switch (action.type) {
            case FETCH_POPULAR_SUCCESSFULLY: {
                const { media } = action.data.popular.data.Page;
                return {
                    ...state,
                    popular: {
                        count: media.length,
                        entities: media,
                    },
                    popularInProgress: false,
                };
            }
            case FETCH_POPULAR_IN_PROGRESS: {
                return {
                    ...state,
                    popular: null,
                    popularInProgress: true,
                };
            }
            case FETCH_POPULAR_WITH_ERRORS: {
                return {
                    ...state,
                    popularInProgress: false,
                };
            }
            default:
                return state;
        }
    };
};
