import React from "react";
import "./Article.css";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import { styled } from "@mui/material/styles";

function Article() {
  const StyledPlayCircleIcon = styled(PlayCircleIcon)({
    fontSize: "58px",
  });

  return (
    <article>
      <div className="img">
        <StyledPlayCircleIcon className="play-button" />
      </div>
      <div className="info">
        <p className="info-lineOne">Kendrick Lamar</p>
        <p className="info-lineTwo">Artist</p>
      </div>
    </article>
  );
}
export default Article;
