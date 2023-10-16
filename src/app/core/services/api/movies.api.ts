import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Subject} from "rxjs";
import {OmdbErrorModel} from "../../models/api/omdb/omdb-error.model";
import {MovieModel} from "../../models/movie.model";
import {OmdbSearchResultModel} from "../../models/api/omdb/omdb-search-result.model";
import {OmdbMovieToMovieConverter} from "../converters/omdbMovieToMovie.converter";

@Injectable()
export class MoviesApi {
  url = 'https://www.omdbapi.com';

  constructor(private httpClient: HttpClient,
              private omdbMovieToMovieConverter: OmdbMovieToMovieConverter) {}

  getMovies(query: string): Subject<MovieModel[]> {
    const moviesSubject = new Subject<MovieModel[]>();
    this.httpClient.get<OmdbSearchResultModel | OmdbErrorModel>(`${this.url}/?apikey=83513884&type=movie&s=${query}`)
      .subscribe({
        next: omdbMovies => this.onMoviesResponse(omdbMovies, moviesSubject),
        error: (error: Error) => moviesSubject.error(error.message)
      });
    return moviesSubject;
  }

  private onMoviesResponse(omdbMovies: OmdbSearchResultModel | OmdbErrorModel, subject: Subject<MovieModel[]>): void {
    if (this.isErrorResponse(omdbMovies)) {
      subject.error(omdbMovies.Error);
    } else {
      const movies: MovieModel[] =
        omdbMovies.Search.map(omdbMovie => this.omdbMovieToMovieConverter.convert(omdbMovie));
      subject.next(movies);
      subject.complete();
    }
  }

  private isErrorResponse(omdbMovies: OmdbSearchResultModel | OmdbErrorModel): omdbMovies is OmdbErrorModel {
    return Object.keys(omdbMovies).includes('Error');
  }
}
