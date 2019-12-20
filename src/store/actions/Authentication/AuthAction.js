import { USER_AUTHENTICATED, USER_FAILED_AUTH, LOADING_AUTH} from './types.js';
import api from '../../../services/api';

const startAuth = () => ({
    type: LOADING_AUTH
});

const userAuthenticated = user => ({
    type: USER_AUTHENTICATED,
    user
})

const failedAuthenticate = error => ({
    type:USER_FAILED_AUTH,
    error
})

const AuthenticateUser = (login,password,push) => {
    return dispatch => {
        dispatch(startAuth());
        // fetching data
        api.post('/login', {login,password})
            .then( response => { 
            localStorage.setItem('token', response.data[0]);
            dispatch(userAuthenticated(response.data[1]))
            push("/dashboard/addProduct")
        })
            .catch( err => {console.error(err);});
    }
}

export default  AuthenticateUser;