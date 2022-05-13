import React from 'react';
// import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

const Rocket = ({ rocket, reserveRockect, cancelReservedRockect }) => {
  const { id, description, reserved } = rocket;
  return (
    <div className="rocket">
      <div className="rocket-img">
        <img src={rocket.flickr_images[0]} alt={rocket.rocket_name} />
      </div>
      <div className="rocket-desc">
        <h2>{rocket.rocket_name}</h2>
        {!reserved ? (
          <>
            <p>{description}</p>
            <button
              className="reserve"
              type="button"
              onClick={() => reserveRockect(id)}
            >
              Reserve Rocket
            </button>
          </>
        ) : (
          <>
            <p>
              <span>Reserved</span>
              {description}
            </p>
            <button
              type="button"
              className="cancel-reserve"
              onClick={() => cancelReservedRockect(id)}
            >
              Cancel Reservation
            </button>
          </>
        )}
      </div>
    </div>
  );
};

Rocket.propTypes = {
  rocket: PropTypes.shape({
    id: PropTypes.number.isRequired,
    reserved: PropTypes.bool,
    rocket_name: PropTypes.string.isRequired,
    flickr_images: PropTypes.arrayOf(PropTypes.any.isRequired).isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  reserveRockect: PropTypes.func.isRequired,
  cancelReservedRockect: PropTypes.func.isRequired,
};

export default Rocket;
