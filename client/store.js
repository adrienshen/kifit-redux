import thunkMiddleware from 'redux-thunk';
import loggerMiddleware from 'redux-logger';

import { createStore, applyMiddleware, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

// import the root reducer
import rootReducer from './reducers/index';

// import data
import locations from './data/locations';
import { loadCommentsLS, updateCommentLS } from './data/comments';
import { loadRatings } from './data/ls-ratings';
import activitiesItems from './data/activities';

const ratings = loadRatings();
const comments = loadCommentsLS();
// console.log('ratings state : ', ratings);

// Modify the initial locations object.
delete locations.Indonesia;

var activities = {};
activities.fetching = true;
activities.response = false;
activities.citySlug = '';
activities.items = [];

const initialState = {
  	locations,
  	activities,
  	ratings,
  	comments
}

const store = createStore(
	rootReducer, 
	initialState,
	applyMiddleware(thunkMiddleware)
);

export const history = syncHistoryWithStore(browserHistory, store);

if(module.hot){
	module.hot.accept('./reducers', () => {
		const nextRootReducer = require('./reducers/index').default;
		store.replaceReducer(nextRootReducer);
	});
}

export default store;
