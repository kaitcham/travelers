import axios from 'axios';

const url = 'https://api.spacexdata.com/v3/missions';
const GET_MISSIONS = 'travelers/missions/GET_MISSIONS';
const JOIN_MISSION = 'travelers/missions/JOIN_MISSION';
const LEAVE_MISSION = 'travelers/missions/LEAVE_MISSION';
const initialState = [];

export const missions = (payload) => ({
  type: GET_MISSIONS,
  payload,
});

export const mission = (id) => ({
  type: JOIN_MISSION,
  payload: id,
});

export const leave = (id) => ({
  type: LEAVE_MISSION,
  payload: id,
});

export const getMissions = () => async (dispatch) => {
  const { data } = await axios.get(url);
  dispatch(missions(data));
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_MISSIONS:
      return payload;
    case JOIN_MISSION: {
      const newState = state.map((mission) => {
        if (mission.mission_id === payload) {
          return { ...mission, join: true };
        }
        return mission;
      });
      return newState;
    }
    case LEAVE_MISSION: {
      const newState = state.map((mission) => {
        if (mission.mission_id === payload) {
          return { ...mission, join: false };
        }
        return mission;
      });
      return newState;
    }
    default:
      return state;
  }
};

export default reducer;
