/* import all the reducers! */
import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import locations from './locations'
import activities from './activities'
import comments from './comments'
import ratings from './ratings'

const rootReducer = combineReducers({
	locations,
  	activities,
  	comments,
  	ratings,
    routing: routerReducer
});

export default rootReducer;
