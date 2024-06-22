import React from "react";
import { CardTypes } from "./Types";
import "./Styles.css";
import { Global } from "@/src/Config/Global";
import LabelsGenre from "../LabelsGenre/LabelsGenre";

const CardMobile: React.FC<CardTypes> = ({
  title,
  id,
  image,
  vote_average,
  arrayLabels,
  onClick,
}) => {
  return (
    <div className="wrapper-container" onClick={onClick}>
      <div className="main-container-mobile">
        <div className="container-image">
          <img
            className="main-image"
            src={`${Global.urlImage}${image}`}
            alt={title}
          />
          <h2 className="vote-text">{vote_average.toFixed(1)}</h2>
        </div>

        <div className="container-information-mobile">
          <h2 className="title-card">{title}</h2>
          <h3 className="id">{id}</h3>
          <LabelsGenre ids={arrayLabels} />
        </div>
      </div>
    </div>
  );
};

export default CardMobile;
