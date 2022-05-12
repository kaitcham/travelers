import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMissions, mission, leave } from '../redux/missions/missions';
import Mission from '../components/Mission';

const MissionsPage = () => {
  const missions = useSelector((state) => state.missions);
  const dispatch = useDispatch();
  useEffect(() => {
    if (missions.length === 0) {
      dispatch(getMissions());
    }
  }, []);
  const joinMission = (id) => {
    dispatch(mission(id));
  };
  const leaveMission = (id) => {
    dispatch(leave(id));
  };
  return (
    <div className="missions">
      <div className="mission">
        <table>
          <thead>
            <tr>
              <th>Mission</th>
              <th>Description</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {missions.map((mission) => (
              <Mission
                key={mission.mission_id}
                mission={mission}
                joinMission={joinMission}
                leaveMission={leaveMission}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MissionsPage;
