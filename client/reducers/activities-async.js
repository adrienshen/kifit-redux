


const fetchActivityByCity = (state = {
	fetching: false,
	activities: []
}, action) => {

	switch (action.type){
    	case 'CLEAR_ALL_ACTIVITIES' :
      		return []

		case 'REQUEST_ACTIVITY_BY_CITY':
			return {
				...state,
				fetching: true,
			}

		case 'FETCH_CITY_ACTIVITIES_SUCCESS':
			return {
				...state,
				fetching: false,
				activities: action.activities,
				lastUpdatedAt: action.receivedAt
			}

		default:
			return state
	}
}

export default fetchActivityByCity;