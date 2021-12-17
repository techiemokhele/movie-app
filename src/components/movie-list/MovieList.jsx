import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Swiper } from "swiper";
import { SwiperSlide } from "swiper/react/swiper-slide";
import tmdbApi, { category } from "../../api/tmdbApi";
import apiConfig from "../../api/apiConfig";
import MovieCard from "../movie-card/MovieCard.jsx";
import Button from "../button/Button.jsx";
//import "./movie-list.scss";

/* Fetching movies by category */
const MovieList = (props) => {
  const [items, setItems] = useState([]);

  /* While data is found, show data */
  useEffect(() => {
    const getList = async () => {
      let response = null;
      const params = {};

      /* Check if data is == category */
      if (props.type !== "similar") {
        switch (props.category) {
          case category.movie:
            response = await tmdbApi.getMoviesList(props.type, { params });
            break;
          default:
            response = await tmdbApi.getTvList(props.type, { params });
        }
      } else {
        response = await tmdbApi.similar(props.category, props.id);
      }
      setItems(response.data.results);
    };
    getList();
  });

  return (
    <div className="movie-list">
      <Swiper grabCursor={true} spaceBetween={10} sliderPerView={"auto"}>
        {items?.map((item, i) => (
          <SwiperSlide key={i}>
            <MovieCard item={item} category={props.category} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

/* Ensure props are strings */
MovieList.propTypes = {
  category: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default MovieList;
