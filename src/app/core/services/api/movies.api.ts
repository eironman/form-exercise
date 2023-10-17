import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable, Observer, Subscription} from "rxjs";
import {OmdbErrorModel} from "../../models/api/omdb/omdb-error.model";
import {MovieModel} from "../../models/movie.model";
import {OmdbSearchResultModel} from "../../models/api/omdb/omdb-search-result.model";
import {OmdbMovieToMovieConverter} from "../converters/omdbMovieToMovie.converter";

@Injectable()
export class MoviesApi {
  private url = 'https://www.omdbapi.com';
  private queryEncoded: string;
  private query: string;
  private movieCache: { [key: string]: MovieModel[] } = {};
  private movieRequest: Subscription;

  constructor(private httpClient: HttpClient,
              private omdbMovieToMovieConverter: OmdbMovieToMovieConverter) {}

  getMovies(query: string): Observable<MovieModel[]> {
    return new Observable(observer => {
      this.query = query;
      this.queryEncoded = encodeURIComponent(query);
      this.cancelPreviousRequest();
      if (this.moviesInCache()) {
        observer.next(this.movieCache[this.queryEncoded]);
        observer.complete();
      } else {
        this.requestMovies(observer);
      }
    });
  }

  private cancelPreviousRequest(): void {
    if (this.movieRequest && !this.movieRequest.closed) {
      this.movieRequest.unsubscribe();
    }
  }

  private moviesInCache(): boolean {
    return Object.hasOwn(this.movieCache, this.queryEncoded);
  }

  private requestMovies(observer: Observer<MovieModel[]>): void {
    this.movieRequest = this.httpClient
      .get<OmdbSearchResultModel | OmdbErrorModel>(`${this.url}/?apikey=83513884&type=movie&s=${this.query}`)
        .subscribe({
          next: omdbMovies => this.onMoviesResponse(omdbMovies, observer),
          error: (error: Error) => observer.error(error.message)
        });
  }

  private onMoviesResponse(omdbMovies: OmdbSearchResultModel | OmdbErrorModel, observer: Observer<MovieModel[]>): void {
    if (this.isErrorResponse(omdbMovies)) {
      observer.error(omdbMovies.Error);
    } else {
      const movies: MovieModel[] =
        omdbMovies.Search.map(omdbMovie => this.omdbMovieToMovieConverter.convert(omdbMovie));
      this.movieCache[this.queryEncoded] = movies;
      observer.next(movies);
      observer.complete();
    }
  }

  private isErrorResponse(omdbMovies: OmdbSearchResultModel | OmdbErrorModel): omdbMovies is OmdbErrorModel {
    return Object.keys(omdbMovies).includes('Error');
  }
}
