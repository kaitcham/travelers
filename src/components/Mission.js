import React from 'react';
import PropTypes from 'prop-types';

const Mission = ({ mission, joinMission, leaveMission }) => {
  const {
    mission_id: id, mission_name: name, description, join,
  } = mission;
  return (
    <tr>
      <td>{name}</td>
      <td>{description}</td>
      {join ? (
        <>
          <td className="active-member">
            <p>Active Member</p>
          </td>
          <td className="mission-button leave-mission">
            <button type="button" onClick={() => leaveMission(id)}>
              Leave Mission
            </button>
          </td>
        </>
      ) : (
        <>
          <td className="not-member">
            <p>Not A Member</p>
          </td>
          <td className="mission-button join-mission">
            <button type="button" onClick={() => joinMission(id)}>
              Join Mission
            </button>
          </td>
        </>
      )}
    </tr>
  );
};

Mission.propTypes = {
  mission: PropTypes.shape({
    mission_id: PropTypes.string.isRequired,
    mission_name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    join: PropTypes.bool,
  }).isRequired,
  joinMission: PropTypes.func.isRequired,
  leaveMission: PropTypes.func.isRequired,
};

export default Mission;
