import React from "react";
import { CardTypes } from "./Types";
import { Global } from "@/src/Config/Global";
import "./Styles.css";
import LabelsGenre from "../LabelsGenre/LabelsGenre";

const Card: React.FC<CardTypes> = ({
  title,
  id,
  text,
  image,
  vote_average,
  arrayLabels,
  onClick,
}) => {
  return (
    <div className="main-container-cards" onClick={onClick}>
      <div className="wrapper-container-cards">
        <div className="container-information">
          <h2 className="title-card">{title}</h2>
          <h3 className="id">{id}</h3>
          <h4 className="subtitle-card">What is it about?</h4>
          <p className="text-card">{text}</p>
        </div>
        <div className="container-movies-info">
          <div className="container-labels">
            <LabelsGenre ids={arrayLabels} />
          </div>

          <div className="container-star">
            <h5 className="count-star">{vote_average.toFixed(1)}</h5>
            <img className="img-start" src="/star.svg" />
          </div>
        </div>
      </div>

      <img
        className="main-image-cards"
        src={`${Global.urlImage}${image}`}
        alt={title}
      />
    </div>
  );
};

export default Card;
