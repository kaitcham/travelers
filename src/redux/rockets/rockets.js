import axios from 'axios';

const url = 'https://api.spacexdata.com/v3/rockets';
const GET_ROCKETS = 'travelers/rockets/GET_ROCKETS';
const RESERVE = 'travelers/rockets/RESERVE';
const CANCEL_RESERVE = 'travelers/rockets/CANCEL_RESERVE';
const initialState = [];

export const getRockets = () => async (dispatch) => {
  const { data } = await axios.get(url);
  dispatch({ type: GET_ROCKETS, payload: data });
};

export const reserve = (id) => ({
  type: RESERVE,
  payload: id,
});

export const cancelReserve = (id) => ({
  type: CANCEL_RESERVE,
  payload: id,
});

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_ROCKETS:
      return payload;
    case RESERVE: {
      const newState = state.map((rocket) => {
        if (rocket.id === payload) {
          return { ...rocket, reserved: true };
        }
        return rocket;
      });
      return newState;
    }
    case CANCEL_RESERVE: {
      const newState = state.map((rocket) => {
        if (rocket.id === payload) {
          return { ...rocket, reserved: false };
        }
        return rocket;
      });
      return newState;
    }
    default:
      return state;
  }
};

export default reducer;
