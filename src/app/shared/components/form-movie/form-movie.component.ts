import {Component, Input} from '@angular/core';
import {ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR} from "@angular/forms";
import {AutoCompleteCompleteEvent, AutoCompleteModule} from "primeng/autocomplete";
import {MoviesApi} from "../../../core/services/api/movies.api";
import {Subscription} from "rxjs";
import {MovieModel} from "../../../core/models/movie.model";
import {SharedModule} from "../../modules/shared.module";
import {OmdbMovieToMovieConverter} from "../../../core/services/converters/omdbMovieToMovie.converter";

@Component({
  standalone: true,
  selector: 'roomex-form-movie',
  templateUrl: './form-movie.component.html',
  styleUrls: ['./form-movie.component.css'],
  imports: [AutoCompleteModule, FormsModule, SharedModule],
  providers: [
    MoviesApi,
    OmdbMovieToMovieConverter,
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: FormMovieComponent,
      multi: true
    }
  ]
})
export class FormMovieComponent implements ControlValueAccessor {
  value: string;
  moviesSuggested: MovieModel[];
  errorMessage: string | undefined;
  private moviesRequest: Subscription;

  @Input() id: string | null;
  @Input() label: string | null;

  constructor(private moviesApi: MoviesApi) { }

  suggestMovies(event: AutoCompleteCompleteEvent): void {
    this.cancelPreviousRequest();
    this.moviesRequest = this.moviesApi.getMovies(event.query)
      .subscribe({
        next: moviesResponse => this.onMoviesReceived(moviesResponse),
        error: error => this.onMoviesReceivedError(error)});
  }

  private cancelPreviousRequest(): void {
    if (this.moviesRequest && !this.moviesRequest.closed) {
      this.moviesRequest.unsubscribe();
    }
  }

  private onMoviesReceived(moviesResponse: MovieModel[]): void {
    this.moviesSuggested = moviesResponse;
    this.errorMessage = undefined;
  }

  private onMoviesReceivedError(error: string): void {
    this.moviesSuggested = [];
    this.errorMessage = error;
  }

  hasChanged(): void {
    if (!this.value) {
      this.errorMessage = undefined;
    }
    this.onChange(this.value);
  }

  onMovieSelect(movie: MovieModel): void {
    this.value = movie.title;
    this.hasChanged();
  }

  // ControlValueAccessor interface
  onChange: any = () => { };
  onTouched: any = () => { };

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  writeValue(value: string): void {
    this.value = value;
  }
}
