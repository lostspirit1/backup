import { combineReducers } from 'redux'
import fetchReducer from '../reducers/fetch/fetchProducts.reducer'
import imgfetchReducer from '../reducers/fetch/fetchImageProduct.reducer'
import auth from '../reducers/Authentication/LoginAuth.reducer';
export default combineReducers({
    data: fetchReducer,
    auth: auth
});
