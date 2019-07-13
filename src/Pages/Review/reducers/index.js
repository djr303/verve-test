import { combineReducers } from 'redux'
import basket from './basket.js'

const reviewApp = combineReducers({
  basket,
});

export default reviewApp;
