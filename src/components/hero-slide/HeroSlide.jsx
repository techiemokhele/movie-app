import React, { useState, useEffect, useRef } from "react";
import SwiperCore, { Autoplay, Swiper } from "swiper";
import { SwiperSlide } from "swiper/react/swiper-slide";
import tmdbApi, { category, movieType } from "../../api/tmdbApi";
import apiConfig from "../../api/apiConfig";
import { useHistory } from "react-router";
import Button, { OutlineButton } from "../button/Button.jsx";
import Modal, { ModalContent } from "../modal/Modal.jsx";
//import "./hero-slide.scss";

/* Get necessary data */
const HeroSlide = () => {
  SwiperCore.use([Autoplay]);
  const [movieItems, setMovieItems] = useState([]);

  /*While data is found, show data */
  useEffect(() => {
    const getMovies = async () => {
      const params = { page: 1, language: "en" };
      try {
        const response = await tmdbApi.getMoviesList(movieType.popular, {
          params,
        });
        setMovieItems(response.data.results?.slice(1, 4));
        console.log(response);
      } catch {
        console.log("Oops! Error, something went wrong.");
      }
    };
    getMovies();
  }, []);

  return (
    <div className="hero-slide">
      <Swiper
        modules={[Autoplay]}
        grabCursor={true}
        spaceBetween={0}
        sliderPerView={1}
        autoplay={{ delay: 3000 }}
      >
        {movieItems?.map((item, i) => (
          <SwiperSlide key={i}>
            {({ isActive }) => (
              <HeroSlideItem
                item={item}
                className={`${isActive ? "active" : ""}`}
              />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
      {movieItems?.map((item, i) => (
        <TrailerModal key={i} item={item} />
      ))}
    </div>
  );
};

/* Show slide images */
const HeroSlideItem = (props) => {
  let hisrory = useHistory();
  const item = props.item;

  /* Set movie poster background */
  const background = apiConfig.originalImage(
    item.data.backdrop_path ? item.data.backdrop_path : item.data.poster_path
  );

  /* Create modal and fetch YouTube Video */
  const setModalActive = async () => {
    const modal = document.querySelector(`#modal_${item.data.id}`);
    const videos = await tmdbApi.getVideos(category.movie, item.data.id);

    /* Check if YouTube trailer exists */
    if (videos.data.results?.length > 0) {
      const videSrc =
        "https://www.youtube.com/embed/" + videos.data.results[0].key;
      modal
        .querySelector(".modal__content > iframe")
        .setAttribute("src", videSrc);
    } else {
      modal.querySelector(".modal__content").innerHTML =
        "Oops! No trailer was found for this movie. Please try again later.";
    }

    modal.classList.toggle("active");
  };

  return (
    <div
      className={`hero-slide__item ${props.className}`}
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="hero-slide__item__content container">
        <div className="hero-slide__item__content__info">
          <h2 className="title">{item.data.title}</h2>
          <div className="overview">{item.data.overview}</div>
          <div className="btns">
            <Button onClick={() => hisrory.push("/movie/" + item.data.id)}>
              Watch Now
            </Button>
            <OutlineButton onClick={setModalActive}>
              Watch Trailer
            </OutlineButton>
          </div>
        </div>
        <div className="hero-slide__item__content__poster">
          <img
            src={apiConfig.w500Image(item.data.poster_path)}
            alt="movie-poster"
          />
        </div>
      </div>
    </div>
  );
};

/* Show and hide movie trailer modal */
const TrailerModal = (props) => {
  const item = props.item;
  const iframeRef = useRef(null);
  const onClose = () => iframeRef.current.setAttribute("src", "");

  return (
    <Modal active={false} id={`modal_${item.data.id}`}>
      <ModalContent onClose={onClose}>
        <iframe
          ref={iframeRef}
          width="100%"
          height="500px"
          title="Trailer"
        ></iframe>
      </ModalContent>
    </Modal>
  );
};

export default HeroSlide;
