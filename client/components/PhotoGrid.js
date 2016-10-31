import React from 'react';

import Photo from './Photo';
import CountrySelector from './CountrySelector';
import FetchSpinner from './FetchSpinner';

const PhotoGrid = React.createClass({

  componentDidMount() {
      // console.log('PhotoGrid mounted!');
      // console.log(this.props.params.citySlug);
      var cityToFetch = this.props.params.citySlug ? this.props.params.citySlug : 'kuala-lumpur';
      this.props.requestActivityByCity(cityToFetch);
  },

  componentWillReceiveProps(nextProps) {
        console.log('PhotoGrid receive props...');
  },

  render() {

    return (
    	<div className="app-container">
    		
    		<CountrySelector places={this.props.places} {...this.props} />
    		  
          {this.props.activities.fetching ? <FetchSpinner /> : ''}

	      <div className="photo-grid">
	        {this.props.activities.items.map((activity, i) => <Photo {...this.props} key={i} i={i} activity={activity} />)}
	      </div>
	    </div>
    )
  }
});

export default PhotoGrid;

