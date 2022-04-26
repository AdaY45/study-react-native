const initialState = {
    token: "",
    user: {},
    error: {},
    isAuth: false,
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case "SET_USER": {
            return {
                ...state,
                user: action.payload
            };
        }
        case "SET_ERROR": {
            return {
                ...state,
                error: action.payload
            }
        }
        case "SET_TOKEN": {
            return {
                ...state,
                token: action.payload
            }
        }
        case "SET_AUTH":
            return {
                ...state,
                isAuth: action.payload
            }
        default:
            return state;
    }
}
