import React, { useContext, useEffect, useState } from "react";
import { LabelsProps } from "./Types";
import "./Styles.css";
import { MoviesContext } from "@/src/app/Context/MoviesContext";

const LabelsGenre: React.FC<LabelsProps> = ({ ids }) => {
  const { genres } = useContext(MoviesContext);
  const [arrayGenres, setArrayGenres] = useState<string[]>([]);

  const findGenre = (genreIds: number[]) => {
    const genreNames = genreIds.map((id) => {
      const foundGenre = genres.find((genre) => genre.id === id);
      return foundGenre ? foundGenre.name : "";
    });
    return genreNames.filter((name: string) => name !== "");
  };

useEffect(() => {
 const newArray = findGenre(ids);
 setArrayGenres(newArray);
}, [ids])

  return (
    <div className="wrapper-label-container">
      {arrayGenres.map((item, index) => (
        <label key={index} className="container-label">
          {item}
        </label>
      ))}
    </div>
  );
};

export default LabelsGenre;
