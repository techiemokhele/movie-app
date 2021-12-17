import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import tmdbApi from "../../api/tmdbApi";
import apiConfig from "../../api/apiConfig";
import CastList from "./CastList.jsx";
import VideoList from "./VideoList.jsx";
import MovieList from "../../components/movie-list/MovieList.jsx";
//import "./detail.scss";

/* Get full description of selected movie or tv series */
const Detail = () => {
  const { category, id } = useParams();
  const [item, setItem] = useState(null);

  /* Loop through data based on category until nothing is found */
  useEffect(() => {
    const getDetail = async () => {
      const response = await tmdbApi.detail(category, id, { params: {} });
      setItem(response);
      window.scrollTo(0, 0);
    };
    getDetail();
  }, [category, id]);

  return (
    <>
      {item && (
        <>
          <div
            className="banner"
            style={{
              backgroundImage: `url(${apiConfig.originalImage(
                item.data.backdrop_path || item.data.poster_path
              )})`,
            }}
          ></div>
          <div className="mb-3 movie-content container">
            <div className="movie-content__poster">
              <div
                className="movie-content__poster__img"
                style={{
                  backgroundImage: `url(${apiConfig.originalImage(
                    item.data.poster_path || item.data.backdrop_path
                  )})`,
                }}
              ></div>
            </div>
            <div className="movie-content__info">
              <h1 className="title">{item.data.title || item.data.name}</h1>
              <div className="genres">
                {item.data.genres ||
                  item.data.genres.slice(0, 5)?.map((genre, i) => {
                    <span className="genre__item" key={i}>
                      {genre.name}
                    </span>;
                  })}
              </div>
              <p className="overview">
                <div className="cast">
                  <div className="section__header">
                    <h2>Main Cast</h2>
                  </div>
                  <CastList id={item.data.id} />
                </div>
              </p>
            </div>
          </div>
          <div className="container">
            <div className="section mb-3">
              <VideoList id={item.data.id} />
            </div>
            <div className="section mb-3">
              <div className="section__header mb-3">
                <h2>Similar</h2>
              </div>
              <MovieList category={category} type="similar" id={item.data.id} />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Detail;
