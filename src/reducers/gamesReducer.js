const initial_state = {
  popularGames: [],
  newGames: [],
  upComingGames: [],
  searched: [],
};

const gamesReducer = (state = initial_state, action) => {
  switch (action.type) {
    case "FETCH_GAMES":
      return {
        ...state,
        popularGames: action.payload.popular,
        newGames: action.payload.newGames,
        upComingGames: action.payload.upcoming,
      };

    default:
      return { ...state };
  }
};

export default gamesReducer;
