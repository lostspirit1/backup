import {FETCH_IMAGE_FAIL, FETCH_IMAGE_SUCESS, FETCH_IMAGE_LOADING} from '../../actions/fetch/actionType';

const initialState = {
    loading: false,
    url: '',
    error: null
  };

  export default function fetchImageProduct(state = initialState, action) {
    switch (action.type) {
      case FETCH_IMAGE_LOADING:
        return {
          ...state,
          loading: true
        };
      case FETCH_IMAGE_SUCESS:
        return {
          ...state,
          loading: false,
          error: null,
          url: action.data
        };
      case FETCH_IMAGE_FAIL:
        return {
          ...state,
          loading: false,
          error: action.error
        };
      default:
        return state;
    }
  }