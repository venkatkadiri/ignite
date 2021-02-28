import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { loadDetail } from "../actions/detailsAction";
import { Link } from "react-router-dom";

function Game(props) {
  console.log(props);
  const stringPathId = props.id.toString();
  const dispatch = useDispatch();

  const loadDetailHandler = () => {
    dispatch(loadDetail(props.id));
    document.body.style.overflow = "hidden";
  };
  return (
    <StyledGame onClick={loadDetailHandler} layoutId={stringPathId}>
      <Link to={`/game/${props.id}`}>
        <h3>{props.name}</h3>
        <p>{props.released}</p>
        <img src={props.image} alt={props.name} />
      </Link>
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
    display: block;
  }
  cursor: pointer;
  text-align: center;
  border-radius: 1rem;
  overflow: hidden;
`;

export default Game;
