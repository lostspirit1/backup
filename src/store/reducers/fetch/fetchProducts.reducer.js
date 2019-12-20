import {FETCH_FAIL, FETCH_SUCESS, FETCH_LOADING} from '../../actions/fetch/actionType';

const initialState = {
    loading: false,
    products: [],
    filteredProducts: [],
    fn:[],
    mw:[],
    ft:[],
    ww:[],
    bs:[],
    stattrek:[],
    normal:[],
    error: null
  };

  export default function productReducer(state = initialState, action) {
    switch (action.type) {
      case FETCH_LOADING:
        return {
          ...state,
          loading: true
        };
      case FETCH_SUCESS:
        return {
          ...state,
          loading: false,
          error: null,
          filteredProducts: action.data.listProducts,
          products: action.data.listProducts,
          fn: action.data.fn,
          mw: action.data.mw,
          ft: action.data.ft,
          ww: action.data.ww,
          bs: action.data.bs,
          stattrek: action.data.listProducts.filter(value=> value.id_types === 1),
          normal: action.data.listProducts.filter(value=> value.id_types === 2)
        };
      case FETCH_FAIL:
        return {
          ...state,
          loading: false,
          error: action.error
        };
      default:
        return state;
    }
  }