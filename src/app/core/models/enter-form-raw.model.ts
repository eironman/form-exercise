import {CountriesEnum} from "../enums/countries.enum";

export interface EnterFormRawModel {
  name: string|null;
  username: string|null;
  country: CountriesEnum|null;
  postCode: string|null;
  favouriteMovie: string|null;
}
