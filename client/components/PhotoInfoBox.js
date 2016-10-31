import React from 'react'

const PhotoInfoBox = React.createClass({

	render() {
		const activity = this.props.activity || {};
		return (
			<div className="info-box">
				<span className="info-address">
					{activity.outlets ? activity.outlets[0].address : ''}</span>
				<div className="contact-info">	
					<a className="info-website" href={activity.website}>{activity.website}</a>
					<span className="info-phone">{activity.phone}</span>
				</div>
			</div>
		)
	}

});

export default PhotoInfoBox;