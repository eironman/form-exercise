import {Injectable} from "@angular/core";
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import * as EnterSelector from "../../../state/selectors/enter.selector";
import * as EnterActions from '../../../state/actions/enter.actions';
import {EnterFormRawModel} from "../../models/enter-form-raw.model";

@Injectable({
  providedIn: 'root'
})
export class EnterStateService {
  constructor(private store: Store) {}

  getEnterForm(): Observable<EnterFormRawModel | null> {
    return this.store.select(EnterSelector.getEnterForm);
  }

  saveEnterForm(form: EnterFormRawModel): void {
    this.store.dispatch(EnterActions.saveEnterForm({ form }));
  }
}
