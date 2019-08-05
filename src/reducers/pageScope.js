const SCOPE_SIZE = 5;

const initialState = {
  scope_size: SCOPE_SIZE,
  current_page: 1,
  start: 1,
  end: SCOPE_SIZE,
  max_pages: 1
};


export default function pageScope(state = initialState, action) {
  switch (action.type) {
    case 'PREV_PAGE':
      if (action.payload.start >= 0) {
        return action.payload;
      } else return state;
    case 'NEXT_PAGE':
      let max_size = action.payload.max_pages * action.payload.scope_size;
      if (action.payload.end < max_size) {
        return action.payload;
      } else return state;
    default:
      return state;
  }
}