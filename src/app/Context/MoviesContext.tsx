import { createContext } from "react";
import { MoviesContextType } from "./Types";

export const MoviesContext = createContext<MoviesContextType>({
  getMovies: async () => [],
  getGenre: async () => [],
  genres: [],
  getMovieDetails:async () => []
});
