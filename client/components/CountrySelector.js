import React from 'react';
import { Link } from 'react-router';

const CountrySelector = React.createClass({

  render() {

    const places = this.props.places;
    //const clearActivities = this.props.clearActivitiesTest;
    const requestActivityByCity = this.props.requestActivityByCity;
    // console.log(requestActivityByCity);

    return (
    	<div className="country-selector">


    		<ul className="list-of-cities">

                {Object.keys(places).map( (key) => {
                   
                    return places[key].map(function(city, i){
                        return (
                            <li className="city-item">
                                <Link onClick={requestActivityByCity.bind(null, city.slug)} to={`/${city.slug}`}>{city.name}</Link>
                            </li>
                        )
                    })

                })}

            </ul>
	    </div>
    )
  }
});

export default CountrySelector;

