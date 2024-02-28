const defaultState = {
    user: {
        name: '',
        age: '',
        gender: ''
    }
};

export const formReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'UPDATE_USER_INFO':
            return {
                ...state,
                user: {
                    ...action.payload
                }
            };
        default:
            return state;
    }
}

