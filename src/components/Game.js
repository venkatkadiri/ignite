import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

function Game(props) {
  return (
    <StyledGame>
      <h3>{props.name}</h3>
      <p>{props.released}</p>
      <img src={props.image} alt={props.name} />
    </StyledGame>
  );
}
const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 30px rgb(0, 0, 0, 0.2);
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
  text-align: center;
  border-radius: 1rem;
`;

export default Game;
