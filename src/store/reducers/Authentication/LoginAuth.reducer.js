import {USER_AUTHENTICATED,USER_FAILED_AUTH, LOADING_AUTH } from '../../actions/Authentication/types';

const initialState = {
    loading:false,
    authenticated: false,
    user: {},
    message: null
  };

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_AUTHENTICATED:
            return{
                ...state,
                loading:false,
                authenticated: true,
                user: action.user,
            }
        case USER_FAILED_AUTH:
            return{
                ...state,
                loading:false,
                message: action.error

            }
        default:
        return state;
    }
}

export default authReducer;