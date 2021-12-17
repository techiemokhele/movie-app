import React from "react";
import { Link } from "react-router-dom";
import { category } from "../../api/tmdbApi";
import apiConfig from "../../api/apiConfig";
import Button from "../button/Button.jsx";

/* Show movie information in a card manner */
const MovieCard = (props) => {
  const item = props.items;
  const link = "/" + category[props.category] + "/" + item.data.id;
  const bg =
    apiConfig.w500Image(item.data.poster_path) || item.data.backdrop_path;

  return (
    <Link to={link}>
      <div className="movie-card" style={{ backgroundImage: `url(${bg})` }}>
        <Button>
          <i className="fas fa-play"></i>
        </Button>
      </div>
      <h3>{item.data.title || item.data.name}</h3>
    </Link>
  );
};

export default MovieCard;
