import {NgModule} from '@angular/core';
import {EnterComponent} from './enter.component';
import {EnterRoutingModule} from "./enter-routing.module";
import {ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "../../shared/modules/shared.module";
import {EnterFormComponent} from './components/enter-form/enter-form.component';
import {ButtonModule} from "primeng/button";
import {FormInputTextComponent} from "../../shared/components/form-input-text/form-input-text.component";
import {FormSelectComponent} from "../../shared/components/form-select/form-select.component";
import {StoreModule} from "@ngrx/store";
import {enterReducer, enterReducerKey} from "../../state/reducers/enter.reducer";
import {CardModule} from "primeng/card";
import {FormMovieComponent} from "../../shared/components/form-movie/form-movie.component";

@NgModule({
  declarations: [
    EnterComponent,
    EnterFormComponent
  ],
  imports: [
    SharedModule,
    StoreModule.forFeature(enterReducerKey, enterReducer),
    EnterRoutingModule,
    ReactiveFormsModule,
    ButtonModule,
    FormInputTextComponent,
    FormSelectComponent,
    FormMovieComponent,
    CardModule
  ]
})
export class EnterModule { }
