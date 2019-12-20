import {FETCH_FAIL,FETCH_LOADING,FETCH_SUCESS} from './actionType';
import api from '../../../services/api';

const FetchSucess = data  => ({
    type:FETCH_SUCESS,
    data
});
const FetchFailed = error  => ({
    type:FETCH_FAIL,
    error
});
const isLoadingFetch = () => ({type: FETCH_LOADING})

export default function AllProducts () {
    return function(dispatch) {
        dispatch(isLoadingFetch());
        // fetching data
        api.get('/products')
            .then( response => { dispatch(FetchSucess(response.data))})
            .catch( err => { dispatch(FetchFailed(err.message));});
    }
}
