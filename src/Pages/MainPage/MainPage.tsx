"use client";
import React, { useContext, useEffect, useState } from "react";
import Card from "@/src/components/Card/Card";
import Loader from "@/src/components/Loader/Loader";
import { MoviesContext } from "@/src/app/Context/MoviesContext";
import { InfoMovies } from "@/src/app/Context/Types";
import { isMobile } from "react-device-detect";
import CardMobile from "@/src/components/CardMobile/CardMobile";
import "./../MainPage/Styles.css";
import Modal from "@/src/components/Modal/ModalComponent";

const MainPage = () => {
  const { getMovies } = useContext(MoviesContext);
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState<InfoMovies[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [deviceIsMobile, setDeviceIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedMovieId, setSelectedMovieId] = useState<number>(0);

  const fetchGetMovies = async (page: number) => {
    const movies = await getMovies(page);
    setMovies(movies);
  };

  useEffect(() => {
    fetchGetMovies(currentPage);
  }, [currentPage]);

  useEffect(() => {
    if (movies.length) {
      setTimeout(() => {
        setLoading(false);
      }, 300);
    }
  }, [movies]);

  useEffect(() => {
    setDeviceIsMobile(isMobile);
  }, []);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const handleOpenModal = (id: number) => {
    setSelectedMovieId(id);
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
    setSelectedMovieId(0);
  };

  return (
    <div>
      <h2 className="title">Top movies en Guros</h2>
      <p className="paragraph">
        Pirate ipsum arrgh bounty warp jack. Red keelhaul spirits on avast.
        Topsail chase pirate lanyard mizzen log me. Hogshead hearties brace
        black boom. Coast rig dead round or.
      </p>

      {loading ? (
        <Loader />
      ) : deviceIsMobile ? (
        <CardMobile list={movies}/>
      ) : (
        <>
          <div className="container-cards-main-page">
            {movies.map((item, index) => (
              <Card
                key={index}
                title={item.title}
                id={item.id}
                text={item.overview}
                image={item.poster_path}
                vote_average={item.vote_average}
                arrayLabels={item.genre_ids}
                onClick={() => handleOpenModal(item.id)}
              />
            ))}
          </div>
          <Modal isOpen={isOpen} onClose={handleCloseModal} movieId={selectedMovieId} />
        </>
      )}
      <div className="container-pagination">
        <button className="button-pagination" onClick={handlePrevPage}>
          Anterior
        </button>
        <button className="button-pagination" onClick={handleNextPage}>
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default MainPage;
