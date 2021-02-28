import React from "react";

// import animation
import { motion } from "framer-motion";
import styled, { withTheme } from "styled-components";
// import redux

import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

//IMAGES
import playstation from "../img/playstation.svg";
import steam from "../img/steam.svg";
import xbox from "../img/xbox.svg";
import nintendo from "../img/nintendo.svg";
import apple from "../img/apple.svg";
import gamepad from "../img/gamepad.svg";
//Star Images
import starEmpty from "../img/star-empty.png";
import starFull from "../img/star-full.png";

function GameDetail(pathid) {
  //exit detailHandler
  const history = useHistory();

  const ExitDetailHandler = (e) => {
    const element = e.target;

    if (element.classList.contains("shadow")) {
      document.body.style.overflow = "auto";
      history.push("/");
    }
  };
  //data
  const { screenshots, game, isLoding } = useSelector((state) => state.detail);

  //GET PLATFORM IMAGES
  const getPlatform = (platform) => {
    switch (platform) {
      case "PlayStation 4":
        return playstation;
      case "Xbox One":
        return xbox;
      case "PC":
        return steam;
      case "Nintendo Switch":
        return nintendo;
      case "iOS":
        return apple;
      default:
        return gamepad;
    }
  };

  //Get Stars
  const getStars = () => {
    const stars = [];
    const rating = Math.floor(game.rating);
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<img alt="star" key={i} src={starFull}></img>);
      } else {
        stars.push(<img alt="star" key={i} src={starEmpty}></img>);
      }
    }
    return stars;
  };

  return (
    <>
      {!isLoding && (
        <CardShadow className="shadow" onClick={ExitDetailHandler}>
          <Detail layoutId={pathid}>
            <Stats>
              <Info>
                <div className="rating">
                  <h3>{game.name}</h3>
                  <p>
                    <b>Rating</b> {game.rating}
                  </p>
                  {getStars()}
                </div>
                <h3>Platforms </h3>

                <Platforms>
                  {game.platforms.map((data) => (
                    <img
                      key={data.platform.id}
                      src={getPlatform(data.platform.name)}
                    ></img>
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
      )}
    </>
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
  img {
    width: 2rem;
    height: 2rem;
    display: inline;
  }
`;
const Info = styled(motion.div)`
  text-align: center;
  width: 100%;
  margin-bottom: 2rem;
  b {
    padding-right: 0.5rem;
  }
`;
const Platforms = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  img {
    margin-left: 3rem;
  }
`;
const Media = styled(motion.div)`
  margin: 5rem 0rem;
  img {
    width: 100%;
    padding: 2rem 0rem;
  }
`;
const Description = styled(motion.div)`
  margin: 5rem 0rem;
  font-family: cursive;
`;
export default GameDetail;
