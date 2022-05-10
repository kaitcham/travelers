import axios from 'axios';

const GET_ROCKETS = 'travelers/rockets/GET_ROCKETS';
const url = 'https://api.spacexdata.com/v3/rockets';
const initialState = [];

export const getRockets = () => async (dispatch) => {
  const { data } = await axios.get(url);
  dispatch({ type: GET_ROCKETS, payload: data });
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_ROCKETS:
      return payload;
    default:
      return state;
  }
};

export default reducer;
