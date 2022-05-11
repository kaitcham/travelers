import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getRockets, reserve, cancelReserve } from '../redux/rockets/rockets';
import Rocket from '../components/Rocket';

const RocketsPage = () => {
  const rockets = useSelector((state) => state.rockets);
  const dispatch = useDispatch();
  useEffect(() => {
    if (rockets.length === 0) {
      dispatch(getRockets());
    }
  }, []);
  const reserveRockect = (id) => {
    dispatch(reserve(id));
  };
  const cancelReservedRockect = (id) => {
    dispatch(cancelReserve(id));
  };

  return (
    <div className="rockets">
      {rockets.map((rocket) => (
        <Rocket
          key={rocket.id}
          rocket={rocket}
          reserveRockect={reserveRockect}
          cancelReservedRockect={cancelReservedRockect}
        />
      ))}
    </div>
  );
};

export default RocketsPage;
