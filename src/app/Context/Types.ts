import { InfoDetails } from "@/src/components/Modal/Types";
import { ReactNode } from "react";

export type PropsProvider = {
  children: ReactNode;
};

export type MoviesContextType = {
  getMovies: (pages: number) => Promise<any[]>;
  getGenre: () => Promise<any[]>;
  getMovieDetails: (id: number) => Promise<InfoDetails>;
  genres: any[];
};

export type ArrayGenres = {
  id: number;
  name: string;
}

export type InfoMovies = {
  title: string;
  id: number;
  overview: string;
  poster_path: string;
  vote_average: number;
  genre_ids: number[];
};
