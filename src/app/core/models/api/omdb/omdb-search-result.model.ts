import {OmdbMovieModel} from "./omdb-movie.model";

export interface OmdbSearchResultModel {
  Search: OmdbMovieModel[];
  totalResults: string;
  Response: string;
}
