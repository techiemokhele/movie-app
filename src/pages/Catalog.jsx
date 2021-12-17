import React from "react";
import { useParams } from "react-router";
import { category as cate } from "../api/tmdbApi";
import MovieGrid from "../components/movie-grid/MovieGrid";
import PageHeader from "../components/page-header/PageHeader.jsx";

/* Fetch movies according to category and display in grid form */
const Catalog = () => {
  const { category } = useParams();

  return (
    <>
      <PageHeader>{cate === cate.movie ? "Movies" : "TV Series"}</PageHeader>
      <div className="container">
        <div className="section mb-3">
          <MovieGrid category={category} />
        </div>
      </div>
    </>
  );
};

export default Catalog;
