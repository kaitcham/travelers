import React from 'react';
import PropTypes from 'prop-types';

const Rocket = ({ rocket }) => {
  const { description } = rocket;
  return (
    <div className="rocket">
      <div className="rocket-img">
        <img src={rocket.flickr_images[0]} alt={rocket.rocket_name} />
      </div>
      <div className="rocket-desc">
        <h2>{rocket.rocket_name}</h2>
        <p>{description}</p>
        <button type="button">Reserve Rocket</button>
      </div>
    </div>
  );
};

Rocket.propTypes = {
  rocket: PropTypes.shape({
    rocket_name: PropTypes.string.isRequired,
    flickr_images: PropTypes.arrayOf(PropTypes.any.isRequired).isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default Rocket;
