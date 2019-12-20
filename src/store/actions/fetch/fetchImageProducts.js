import {FETCH_IMAGE_FAIL, FETCH_IMAGE_LOADING, FETCH_IMAGE_SUCESS} from './actionType';
import api from '../../../services/api';

const FetchImageSucess = data => ({
    type: FETCH_IMAGE_SUCESS,
    data
})

const FetchImageFailed = err => ({
    type: FETCH_IMAGE_FAIL,
    err
})

const FetchImageLoading = () => ({
    type: FETCH_IMAGE_LOADING
})

export default function getImages (imageUrl) {
    return function(dispatch) {
        dispatch(FetchImageLoading());
        // fetching data
        api.get(`/uploads/${imageUrl}`)
            .then( response => { console.log(response)})
            .catch( err => { dispatch(FetchImageFailed(err.message));});
    }
}

