import React from 'react';
import { Link } from 'react-router';
import PhotoInfoBox from './PhotoInfoBox'
import CSSTransitionGroup from 'react-addons-css-transition-group';

import LocationMap from './LocationMap';

const Photo = React.createClass({

	render() {
		const { activity, i, comments, ratings } = this.props;
		const citySlug = this.props.activities.citySlug;
		const ratingToDisplay = ratings[activity.code] ? ratings[activity.code].rating : activity.rating_count;
		const outlets = activity.outlets || [];
		const outlets1 = outlets[0] || {};

			//console.log('Activity outlets : ', outlets1);

			var coords = outlets1.coordinates || '';
			const lat = Number(coords.split(', ')[0]);
			const lng = Number(coords.split(', ')[1]);
			console.log(lat, lng);
			const markers = [{
				position: {
			        lat: lat,
			        lng: lng
				}
			}];

		// console.log(ratingToDisplay);

		return (
			<figure className="grid-figure">
				<div className="grid-photo-wrap">
					<Link to={`/${citySlug}/${activity.code}`}>
						<img src={activity.profile_image} alt={activity.description} className="grid-photo" />
					</Link>

					<CSSTransitionGroup transitionName="like"
						transitionEnterTimeout={500}
						transitionLeaveTimeout={500}>
						<span key={activity.rating_count} className="likes-heart">
							{ratingToDisplay}</span>
					</CSSTransitionGroup>
				</div>

				<figcaption>
					<h2>{activity.name}</h2>
					<div className="control-buttons">
						<button onClick={this.props.incrementRating.bind(null, i, ratingToDisplay, activity.code)} className="likes">&hearts; {ratingToDisplay}</button>
						<Link className="button" to={`/${citySlug}/${activity.code}`}>
							<span className="comment-count">
								<span className="speech-bubble"></span>&nbsp;
								{comments[activity.code] ? comments[activity.code].length : 0}
							</span>
						</Link>
					</div>
					<p className="photo-description">{this.props.params.postId ? activity.description : activity.desc_trunc}</p>
					{this.props.params.postId ? <PhotoInfoBox activity={this.props.activity} /> : <div></div>}
				</figcaption>
				{this.props.params.postId ? <LocationMap markers={markers} lat={lat} lng={lng} ></LocationMap> : <div></div>}
			</figure>
		)
	}
});

export default Photo;