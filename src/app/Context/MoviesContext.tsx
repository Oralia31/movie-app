import { createContext } from "react";
import { MoviesContextType } from "./Types";
import { InfoDetails } from "@/src/components/Modal/Types";

const defaultInfoDetails: InfoDetails = {
  poster_path: '',
  title: '',
  id: 0,
  overview: '',
  genres: [],
};


export const MoviesContext = createContext<MoviesContextType>({
  getMovies: async () => [],
  getGenre: async () => [],
  genres: [],
  getMovieDetails: async (id: number) => defaultInfoDetails
});
