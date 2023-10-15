import {FormControl} from "@angular/forms";
import {CountriesEnum} from "../enums/countries.enum";

export interface EnterFormModel {
  name: FormControl<string|null>;
  username: FormControl<string|null>;
  country: FormControl<CountriesEnum|null>;
  postCode: FormControl<string|null>;
  favouriteMovie: FormControl<string|null>;
}
