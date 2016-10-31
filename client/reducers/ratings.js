
function ratings(state = {}, action){
	//console.log('The state in ratings reducer...');
  //console.log(state, action);
  	
  	switch(action.type) {
  		case 'INCREMENT_RATING' :
  			//Just return the most recent ratings object from LocalStorage...
  			return action.ratingsFromLS

	  	default:
	  		return state;
  	}
  	return state;
}

export default ratings;
