import React, { useContext, useState, useEffect } from "react";
import { PropsModal } from "./Types";
import "./Styles.css";
import { Modal, Box, Typography, Button } from "@mui/material";
import { MoviesContext } from "@/src/app/Context/MoviesContext";
import { InfoMovies } from "@/src/app/Context/Types";
import { Global } from "@/src/Config/Global";

const ModalComponent: React.FC<PropsModal> = ({
  isOpen,
  onClose,
  movieId,
  children,
}) => {
  const { getMovieDetails } = useContext(MoviesContext);
  const [movieDetails, setMovieDetails] = useState<any[]>([]);

  const fetchGetMovieDetails = async (id: number) => {
    const details = await getMovieDetails(id);
    setMovieDetails(details);
  };

  useEffect(() => {
    if (isOpen) {
      fetchGetMovieDetails(movieId);
    }
  }, [isOpen, movieId]);
  console.log(movieDetails);

  if (!isOpen) return null;

  return (
    <Modal open={isOpen} onClose={onClose} className="container-modal">
      <div>
        <div className="header-modal">
          <Button onClick={onClose} className="close-button">
            Close
          </Button>
        </div>

        <div>
          <div className="modal-box">
            <div className="container-image-modal">
              <img
                className="main-image-modal"
                src={`${Global.urlImage}${movieDetails.poster_path}`}
                alt={movieDetails.title}
              />
            </div>
            <div className="container-information-modal">
              <h2 className="title-modal">{movieDetails.title}</h2>
              <h3 className="id-modal">{movieDetails.id}</h3>
              <h4 className="subtitle-modal">What is it about?</h4>
              <p className="text-modal">{movieDetails.overview}</p>

              <div className="container-labels-modal">
                {movieDetails.genres?.map((item, index) => (
                  <label key={index} className="container-label-modal">{item.name}</label>
                ))}
              </div>
              <Typography>{children}</Typography>
            </div>
          </div>
        </div>
        {children}
      </div>
    </Modal>
  );
};

export default ModalComponent;
