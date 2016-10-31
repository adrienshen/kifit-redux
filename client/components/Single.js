import React from 'react';
import Photo from './Photo';
import Comments from './Comments';
import NavArrow from './NavArrow';

const Single = React.createClass({

  componentWillMount() {
    this.props.requestActivityByCity(this.props.params.citySlug);
  },

  render() {
  	const { postId, citySlug } = this.props.params;
  	const i = this.props.activities.items.findIndex((activity) => activity.code === postId);
  	const activity = this.props.activities.items[i] || {};
    const prevAct = this.props.activities.items[i-1] || {};
    const nextAct = this.props.activities.items[i+1] || {};
    // console.log('next link : ', nextAct.code);

  	const activityComments = this.props.comments[postId] || [];
  	//console.log('Comments for this Single : ', comments[1]);
    return (
      <div className="single-photo">
        <NavArrow direction={'prev'} navLink={prevAct.code} citySlug={citySlug} />
       	<Photo {...this.props} i={i} key={i} activity={activity} />
       	<Comments activityComments={activityComments} {...this.props} />
        <NavArrow direction={'next'} navLink={nextAct.code} citySlug={citySlug} />
      </div>
    )
  }
});

export default Single;
