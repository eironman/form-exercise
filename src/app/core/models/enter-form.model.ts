import {FormControl} from "@angular/forms";

export interface EnterFormModel {
  name: FormControl<string|null>;
  username: FormControl<string|null>;
  country: FormControl<string|null>;
  postCode: FormControl<string|null>;
  favouriteMovie: FormControl<string|null>;
}
