export default () => {
    const defaultState = {
        popularInProgress: false,
    }

    return (state = defaultState, action) => {
        switch (action.type) {
            case 'get_number':
                return {
                    ...state,
                };
            default:
                return state;
        }
    }
};
