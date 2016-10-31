import React from 'react';
import { Link } from 'react-router';

/* @Component: Generates the next and prev arrows that show on the singles React component. Takes @Props: direction, navLink. */

const NavArrow = React.createClass({

	render() {
		const direction = this.props.direction;
		const citySlug = this.props.citySlug;
		const navLink = this.props.navLink || 'firstOrLast';
		const navContainerClass = 'container-'+ this.props.direction;
		const navClass = direction === 'prev' ? 'prev-activity' : 'next-activity';

		return (
			<div className={navContainerClass}>
				{ (navLink === 'firstOrLast') 
					? <span></span>
					: <Link className={navClass} to={`/${citySlug}/${navLink}`}>
						{ direction }</Link>}
			</div>
		)
	}
});

export default NavArrow;