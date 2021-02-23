import axios from "axios";
import { gameDetailsUrl, gameScreenShotssUrl } from "../api";

export const loadDetail = (game_id) => async (dispatch) => {
  dispatch({
    type: "LOADING_DETAIL",
  });
  const detailData = await axios.get(gameDetailsUrl(game_id));
  const ScreenshotData = await axios.get(gameScreenShotssUrl(game_id));

  dispatch({
    type: "GET_DETAIL",
    payload: {
      game: detailData.data,
      screenshots: ScreenshotData.data,
    },
  });
};
