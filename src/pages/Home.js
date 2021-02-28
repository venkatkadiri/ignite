import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gamesAction";
import Game from "../components/Game";
import GameDetail from "../components/GameDetail";
import { useLocation } from "react-router-dom";

// import animation
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import styled from "styled-components";

function Home() {
  const location = useLocation().pathname;
  const pathid = location.split("/")[2];
  const dispatch = useDispatch(loadGames);
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);

  //importing state

  const { popularGames, newGames, upComingGames } = useSelector(
    (state) => state.games
  );

  return (
    <AnimateSharedLayout type="crossfade">
      <GameList>
        <AnimatePresence>
          {pathid && <GameDetail pathid={pathid} />}
        </AnimatePresence>
        <h2>Upcoming Games</h2>

        <Games>
          {upComingGames.map((game) => (
            <Game
              name={game.name}
              released={game.released}
              id={game.id}
              image={game.background_image}
              key={game.id}
            />
          ))}
        </Games>
        <h2>popular Games</h2>

        <Games>
          {popularGames.map((game) => (
            <Game
              name={game.name}
              released={game.released}
              id={game.id}
              image={game.background_image}
              key={game.id}
            />
          ))}
        </Games>
        <h2>New Games</h2>

        <Games>
          {newGames.map((game) => (
            <Game
              name={game.name}
              released={game.released}
              id={game.id}
              image={game.background_image}
              key={game.id}
            />
          ))}
        </Games>
      </GameList>
    </AnimateSharedLayout>
  );
}
const GameList = styled(motion.div)`
  padding: 0rem 5rem;
  h2 {
    padding: 5rem 0rem;
  }
`;
const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`;

export default Home;
