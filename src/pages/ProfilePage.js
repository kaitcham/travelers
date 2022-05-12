import React from 'react';
import { useSelector } from 'react-redux';

const ProfilePage = () => {
  const rockets = useSelector((state) => state.rockets);
  const reservedRockets = rockets.filter((rocket) => rocket.reserved === true);

  return (
    <div className="profile">
      <div>
        <h2>My Rockets</h2>
        {reservedRockets.length === 0 ? (
          <p className="empty-profile">No Reserved Rocket Yet!</p>
        ) : (
          reservedRockets.map((rocket) => (
            <p key={rocket.rocket_id} className="profile-rockets">
              {rocket.rocket_name}
            </p>
          ))
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
