import React from "react";
import { CardTypes } from "./Types";
import "./Styles.css";
import { Global } from "@/src/Config/Global";
import LabelsGenre from "../LabelsGenre/LabelsGenre";

const CardMobile: React.FC<CardTypes> = ({ list = [], onClick }) => {
  return (
    <div className="wrapper-container" onClick={onClick}>
      {list.map((item, index) => (
        <div key={index} className="main-container-mobile">
          <div className="container-image">
            <img
              className="main-image"
              src={`${Global.urlImage}${item.poster_path}`}
              alt={item.title}
            />
            <h2 className="vote-text">{item.vote_average.toFixed(1)}</h2>
          </div>

          <div className="container-information-mobile">
            <h2 className="title-card">{item.title}</h2>
            <h3 className="id">{item.id}</h3>

            <LabelsGenre ids={item.genre_ids} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardMobile;
