import { ReactNode } from "react";

export type PropsProvider = {
  children: ReactNode;
};

export type MoviesContextType = {
  //movies: InfoMovies[];
  //getMoviesAtWeek: () => Promise<Movie[]>;
  getMovies: (pages: number) => Promise<any[]>;
  getGenre: () => Promise<any[]>;
  getMovieDetails: (pages: number) => Promise<any[]>;
  genres: any[];
};

export type InfoMovies = {
  title: string;
  id: number;
  overview: string;
  poster_path: string;
  vote_average: number;
  genre_ids: number[];
};
