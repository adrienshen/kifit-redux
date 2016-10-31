import React from 'react';
import { Link } from 'react-router';

const Main = React.createClass({
  render() {
    return (
      <div className="Main">
        <div className="header-container">
            <h1>
              <Link onClick={this.props.requestActivityByCity.bind(null, 'kuala-lumpur')} to="/">K<span className="fit-label">FIT</span> <span className="second-label">redux</span></Link>
            </h1>
        </div>
          {React.cloneElement(this.props.children, this.props)}
      </div>
    )
  }
});

export default Main;
