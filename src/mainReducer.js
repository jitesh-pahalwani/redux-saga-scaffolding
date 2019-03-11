import {combineReducers} from 'redux';
import homeReducer from './home/reducers';
import detailsReducer from './details/reducers';

const mainReducer = combineReducers({
  homeReducer: homeReducer,
  detailsReducer: detailsReducer
});

export default mainReducer
