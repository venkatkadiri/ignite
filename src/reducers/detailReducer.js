const initial_state = {
  game: { platforms: [] },
  screenshots: { results: [] },
  isLoding: true,
};

function detailReducer(state = initial_state, action) {
  switch (action.type) {
    case "GET_DETAIL":
      return {
        ...state,
        game: action.payload.game,
        screenshots: action.payload.screenshots,
        isLoding: false,
      };
    case "LOADING_DETAIL":
      return {
        ...state,
        isLoding: true,
      };

    default:
      return {
        ...state,
      };
  }
}

export default detailReducer;
