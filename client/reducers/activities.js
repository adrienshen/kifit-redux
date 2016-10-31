// const selectedCity = (state = {}, action) => {
//     switch (action.type) {
//         case 'SELECT_CITY':
//         return action.citySlug;
//     default:
//         return state;
//     }
// }

const lenOfTrunc = 80;

function activities(state = [], action){
  // console.log(state, action);
  switch(action.type){
  	case 'INCREMENT_RATING' :
    	// return updated state
    	const i = action.index;
    	return {
            ...state,
            items: [
        		...state.items.slice(0,i),//before the one we are updating...
        		{...state.items[i], rating_count: action.currentRating + 1},
        		...state.items.slice(i+1), //after what we are updating...
            ]
    	}

    case 'REQUEST_ACTIVITY_BY_CITY' :
        //console.log('REQUEST_ACTIVITY_BY_CITY FIRED!');
        return {
            items: [],
            citySlug: action.citySlug,
            fetching: true,
            response: false
        }
        //console.log('REQUEST_ACTIVITY_BY_CITY : ', newState1);

    case 'FETCH_CITY_ACTIVITIES_SUCCESS' :
        //console.log('Got cities!')
        action.newActivities.forEach(activity => {
            var code = activity.name.replace(/\s+/g, '-').toLowerCase()+ '-'+ activity.id;
            code = code.replace('&', '');
            code = code.replace(/-+/g, '-');
            activity.code = code;

            if (!activity.description){
                activity.desc_trunc = 'No description.';
                activity.description = 'No description.';
                return
            }
            var shorten = activity.description.substring(0, lenOfTrunc)+ ' ...';
            activity.desc_trunc = shorten;
        })
        return {
            items: action.newActivities,
            citySlug: action.citySlug,
            fetching: false,
            response: true,
            updatedAt: action.receivedAt
        }

  	default:
        return state;
  }
  return state;
}

export default activities;
