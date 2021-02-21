const initial_state = {
  game: { platforms: [] },
  screenshots: { results: [] },
};

function detailReducer(state = initial_state, action) {
  switch (action.type) {
    case "GET_DETAIL":
      return {
        ...state,
        game: action.payload.game,
        screenshots: action.payload.screenshots,
      };
    default:
      return {
        ...state,
      };
  }
}

export default detailReducer;
