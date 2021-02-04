const initial_state = {
  popularGames: [],
  newGames: [],
  upComingGames: [],
  searched: [],
};

const gamesReducer = (state = initial_state, action) => {
  switch (action.type) {
    case "FETCH_GAMES":
      return { ...state };

    default:
      return { ...state };
  }
};

//Action Creator
const fetchGames = (userData) => {
  return {
    type: "FETCH_GAMES",
    payLoad: userData,
  };
};
export default gamesReducer;
