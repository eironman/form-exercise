import {Injectable} from "@angular/core";
import {MovieModel} from "../../models/movie.model";
import {OmdbMovieModel} from "../../models/api/omdb/omdb-movie.model";

@Injectable()
export class OmdbMovieToMovieConverter {

  convert(omdbMovie: OmdbMovieModel): MovieModel {
    return {
      title: omdbMovie.Title,
      year: omdbMovie.Year,
      poster: omdbMovie.Poster
    }
  }
}
