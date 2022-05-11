import axios from 'axios';

const url = 'https://api.spacexdata.com/v3/rockets';
const GET_ROCKETS = 'travelers/rockets/GET_ROCKETS';
const RESERVE = 'travelers/rockets/RESERVE';
const initialState = [];

export const getRockets = () => async (dispatch) => {
  const { data } = await axios.get(url);
  dispatch({ type: GET_ROCKETS, payload: data });
};

export const reserve = (id) => ({
  type: RESERVE,
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
    default:
      return state;
  }
};

export default reducer;
