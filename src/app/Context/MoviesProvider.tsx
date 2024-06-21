"use client";

import React, { useEffect, useState } from "react";
import { MoviesContext } from "./MoviesContext";
import { PropsProvider } from "./Types";
import { Global } from "@/src/Config/Global";
import axiosConfig from "@/src/Config/Axios";

const MoviesProvider: React.FC<PropsProvider> = ({ children }) => {
  const [genres, setGenres] = useState([]);

  const getMovies = async (page: number): Promise<any[]> => {
    try {
      const response = await axiosConfig.get(
        `discover/movie?api_key=${Global.apiKey}&page=${page}`
      );
      return response.data.results;

      /*const limitedResults = response.data.results.slice(0, 5);
      console.log(limitedResults);
      return limitedResults;*/
    } catch (error) {
      console.error("Error fetching movies: ", error);
      throw error;
    }
  };

  const getGenre = async () => {
    try {
      const response = await axiosConfig.get(
        `genre/movie/list?api_key=${Global.apiKey}&language=en-US`
      );
      return response.data.genres;
    } catch (error) {
      console.error("Error fetching movies: ", error);
      throw error;
    }
  };

  const getMovieDetails = async (id: number): Promise<any[]> => {
    try {
      const response = await axiosConfig.get(
        `movie/${id}?api_key=${Global.apiKey}`
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching movies details: ", error);
      throw error;
    }
  };


  useEffect(() => {
    getMovies(1);
  }, []);

  useEffect(() => {
    const fetchGenre = async () => {
      const genres = await getGenre();
      setGenres(genres);
    };

    fetchGenre();
  }, []);


  return (
    <MoviesContext.Provider
      value={{
        getMovies,
        getGenre,
        genres,
        getMovieDetails
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};

export default MoviesProvider;
