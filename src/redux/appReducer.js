import {getAuthUserDataTC} from "./authReducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

let initialState = {
    initialized: false,
    globalError: null
}
const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true,
            }
        default:
            return state;
    }

}

export const InitializedSuccessAC = () => ({type: INITIALIZED_SUCCESS});

export const initializeAppTC = () => (dispatch) => {
    let promise = dispatch(getAuthUserDataTC());

    Promise.all([promise])
        .then(() => {
            dispatch(InitializedSuccessAC());
        })
}


export default appReducer;
