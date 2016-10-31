import fetch from 'isomorphic-fetch'
import { updateRatings, loadRatings } from '../data/ls-ratings'
import { updateCommentsLS, loadCommentsLS } from '../data/comments';
/* actions */
const INCREMENT_RATING = 'INCREMENT_RATING',
      ADD_COMMENT = 'ADD_COMMENT',
      REMOVE_COMMENT = 'REMOVE_COMMENT',
      SELECT_CITY = 'SELECT_CITY',
      REQUEST_ACTIVITY_BY_CITY = 'REQUEST_ACTIVITY_BY_CITY',
      FETCH_CITY_ACTIVITIES_SUCCESS = 'FETCH_CITY_ACTIVITIES_SUCCESS',
      CLEAR_ALL_ACTIVITIES = 'CLEAR_ALL_ACTIVITIES';

// increment
export const incrementRating = (index, currentRating, activityCode) => {
  const ratingsFromLS = loadRatings();
  //console.log('From localStorage : ', ratingsFromLS);
  ratingsFromLS[activityCode] = { rating: currentRating + 1 }
  updateRatings(ratingsFromLS);

      return {
        type: INCREMENT_RATING,
        index,
        currentRating,
        ratingsFromLS
      }
}

// add comment
export const addComment = (postId, author, comment) => {
  //console.log('Dispatching and comment.');

  const commentsFromLS = loadCommentsLS();
  if (commentsFromLS[postId]) {
    // if the comments postId already exist, push the new comment.
    commentsFromLS[postId].push({
      text: comment,
      user: author
    });
  } else {
    // if it does not exist yet, create the object, then push the new comment.
    commentsFromLS[postId] = [];
    commentsFromLS[postId].push({
      text: comment,
      user: author
    });
  }
  //console.log('The comment state: ', commentsFromLS);
  updateCommentsLS(commentsFromLS);

  return {
    type: ADD_COMMENT,
    postId,
    author,
    comment
  }
}

const removeCommentFromLS = (postId, i) => {
  const commentsFromLS = loadCommentsLS();
  //console.log('this!!! ', commentsFromLS[postId]);
  commentsFromLS[postId].splice(i, 1);
  updateCommentsLS(commentsFromLS);
}

// remove comment
export const removeComment = (postId, i) => {

  removeCommentFromLS(postId, i);

  return {
    type: REMOVE_COMMENT,
    postId,
    i
  }
}


/* user select city to display activity */
const selectCity = (citySlug) => {
  console.log('selectCity triggered!');
  return {
    type: SELECT_CITY,
    citySlug
  }
}

const startRequestForActivities = (citySlug) => {
    return {
      type: REQUEST_ACTIVITY_BY_CITY,
      citySlug,
      message: 'fetching activities...',
      startedAt: Date.now(),
    }
}

/* cities fetch activities */
export const requestActivityByCity = (citySlug) => (dispatch) => {
  dispatch(startRequestForActivities(citySlug))
  //console.log('This is the city slug : '+ citySlug);

  let activityRequest = new Request(`https://access.kfit.com/api/companies?city=${citySlug}`, {
      method: 'GET',
  })
  return fetch(activityRequest).then(function(response) {
      return response.json();
  })
  .then(json => dispatch(fetchCityActivitiesSuccess(citySlug, json)))
}

const fetchCityActivitiesSuccess = (citySlug, jsonResponse) => {
  //console.log(`Heres the activities json from GET: ${citySlug} : `, jsonResponse);
  return {
    type: FETCH_CITY_ACTIVITIES_SUCCESS,
    citySlug,
    newActivities: jsonResponse,
    receivedAt: Date.now()
  }
}

export const clearActivitiesTest = (citySlug) => {
  return {
    type: CLEAR_ALL_ACTIVITIES,
    citySlug,
    receivedAt: Date.now()
  }
}
