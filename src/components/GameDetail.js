import React from "react";

// import animation
import { motion } from "framer-motion";
import styled, { withTheme } from "styled-components";
// import redux

import { useSelector } from "react-redux";

function GameDetail() {
  //data
  const { screenshots, game } = useSelector((state) => state.detail);

  return (
    <div>
      <CardShadow>
        <Detail>
          <Stats>
            <Info>
              <div className="rating">
                <h3>{game.name}</h3>
                <p>Rating : {game.rating}</p>
              </div>
              <h3>Platforms :</h3>

              <Platforms>
                {game.platforms.map((data) => (
                  <h3 key={data.platform.id}>{data.platform.name}</h3>
                ))}
              </Platforms>
            </Info>
          </Stats>
          <Media>
            <img src={game.background_image} alt={game.background_image} />
          </Media>
          <Description>{game.description_raw}</Description>
          <div className="galary">
            {screenshots.results.map((data) => (
              <img src={data.image} key={screenshots.id} />
            ))}
          </div>
        </Detail>
      </CardShadow>
    </div>
  );
}

const CardShadow = styled(motion.div)`
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  overflow-y: scroll;
  top: 0;
  left: 0;
  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: darkgrey;
  }
  &::-webkit-scrollbar-track {
    background: white;
  }
`;
const Detail = styled(motion.div)`
  width: 80%;
  border-radius: 1rem;
  padding: 2rem 5rem;
  background: white;
  position: absolute;
  img {
    width: 100%;
  }
  left: 10%;
`;
const Stats = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Info = styled(motion.div)`
  text-align: center;
`;
const Platforms = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  img {
    margin-left: 3rem;
  }
`;
const Media = styled(motion.div)`
  margin-top: 5rem 0rem;
  img {
    width: 100%;
  }
`;
const Description = styled(motion.div)`
  margin-top: 5rem 0rem;
`;
export default GameDetail;
