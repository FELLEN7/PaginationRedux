const initialState = [];

export default function playlist(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_TRACKS_SUCCESS':
      return action.payload;
    default:
      return state;
  }
}