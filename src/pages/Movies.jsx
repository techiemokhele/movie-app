import React from "react";
import { Link } from "react-router-dom";
import { OutlineButton } from "../components/button/Button.jsx";
import { category, movieType, tvType } from "../api/tmdbApi";
import HeroSlide from "../components/hero-slide/HeroSlide.jsx";
import MovieList from "../components/movie-list/MovieList.jsx";

/* Popular movie home-page: show collection */
const Movies = () => {
  return (
    <>
      <HeroSlide />
      {/* Trending Movies */}
      <div className="container">
        <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>
              <i className="fas fa-star" style={{ color: "orange" }}></i>{" "}
              Trending Movies
            </h2>
            <Link to="/movie">
              <OutlineButton className="small">View More</OutlineButton>
            </Link>
          </div>
          <MovieList category={category.movie} type={movieType.popular} />
        </div>

        {/* Top-rated movies */}
        <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>
              <i className="fas fa-star" style={{ color: "orange" }}></i>
              Top-Rated Movies
            </h2>
            <Link to="/movie">
              <OutlineButton className="small">View More</OutlineButton>
            </Link>
          </div>
          <MovieList category={category.movie} type={movieType.top_rated} />
        </div>

        {/* Trending TV Series */}
        <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>
              <i className="fas fa-star" style={{ color: "orange" }}></i>
              Trending TV Series
            </h2>
            <Link to="/tv">
              <OutlineButton className="small">View More</OutlineButton>
            </Link>
          </div>
          <MovieList category={category.tv} type={tvType.popular} />
        </div>

        {/* Top-Rated TV Series */}
        <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>
              <i className="fas fa-star" style={{ color: "orange" }}></i>
              Top-Rated TV Series
            </h2>
            <Link to="/tv">
              <OutlineButton className="small">View More</OutlineButton>
            </Link>
          </div>
          <MovieList category={category.tv} type={tvType.top_rated} />
        </div>
      </div>
    </>
  );
};

export default Movies;
