import React, { useState, useEffect, useCallback } from "react";
import { useHistory, useParams } from "react-router";
import tmdbApi, { category, movieType, tvType } from "../../api/tmdbApi";
import MovieCard from "../movie-card/MovieCard.jsx";
import Button, { OutlineButton } from "../button/Button.jsx";
import Input from "../input/Input.jsx";
//import "./movie-grid.scss";

/* Show movies in a grid form */
const MovieGrid = (props) => {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const { keyword } = useParams();

  /* Iterate until nothing is found */
  useEffect(() => {
    const getList = async () => {
      let response = null;

      /* Allow search capabilities */
      if (keyword === undefined) {
        const params = {};
        switch (props.category) {
          case category.movie:
            response = await tmdbApi.getMoviesList(movieType.upcoming, {
              params,
            });
            break;
          default:
            response = await tmdbApi.getTvList(tvType.popular, {
              params,
            });
        }
      } else {
        const params = {
          query: keyword,
        };
        response = await tmdbApi.search(props.category, { params });
      }
      setItems(response.data.results);
      setTotalPage(response.data.total_page);
    };
    getList();
  }, [props.category, keyword]);

  /* Load more movies when the end is reached */
  const loadMoreMovies = async () => {
    let response = null;

    /* Allow search capabilities */
    if (keyword === undefined) {
      const params = { page: page + 1, language: "en" };
      switch (props.category) {
        case category.movie:
          response = await tmdbApi.getMoviesList(movieType.upcoming, {
            params,
          });
          break;
        default:
          response = await tmdbApi.getTvList(tvType.popular, {
            params,
          });
      }
    } else {
      const params = {
        page: page + 1,
        language: "en",
        query: keyword,
      };
      response = await tmdbApi.search(props.category, { params });
    }
    setItems(...items, ...response.data.results);
    setPage(page + 1);
  };

  return (
    <>
      <div className="section mb-3">
        <MovieSearch category={props.category} keyword={keyword} />
      </div>
      <div className="movie-grid">
        {items?.map((item, i) => (
          <MovieCard item={item} category={props.category} key={i} />
        ))}
      </div>
      {page < totalPage ? (
        <div className="movie-grid__loadmore">
          <OutlineButton className="small" onClick={loadMoreMovies}>
            Load more
          </OutlineButton>
        </div>
      ) : null}
    </>
  );
};

/* Enable users to search content using own keywords with validation */
const MovieSearch = (props) => {
  const history = useHistory();
  const [keyword, setKeyword] = useState(props.keyword ? props.keyword : "");
  const goToSearch = useCallback(() => {
    if (keyword.trim().length > 0) {
      history.push(`${category[props.category]}/search/${keyword}`);
    }
  }, [keyword, props.category, history]);

  /* Prevent page reload */
  useEffect(() => {
    const enterEvent = (e) => {
      e.preventDefault();
      if (e.keyCode === 13) {
        goToSearch();
      }
    };
    document.addEventListener("keyup", enterEvent);
    return () => {
      document.removeEventListener("keyup", enterEvent);
    };
  }, [keyword, goToSearch]);

  return (
    <div className="movie-search">
      <Input
        type="text"
        placeholder="Search..."
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <Button className="small" onClick={goToSearch}>
        <i className="fas fa-search"></i> Search
      </Button>
    </div>
  );
};

export default MovieGrid;
