import { authMe } from "../authReducer/auth-reducer";


const SET_INITIALIZED = 'app-reducer/SET_INITIALIZED'

const initialState = {
    initialized: false,
}


const appReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_INITIALIZED: 
            return {
                ...state,
                initialized: true             
            };
        default: 
            return state;
    }
}

export const initializedSuccess = () => ({type: SET_INITIALIZED});

export const initializedApp = () => (dispatch) => {
    let promise = dispatch(authMe());

    Promise.all([promise])
        .then(() => {
            dispatch(initializedSuccess());
        })
}

export default appReducer;