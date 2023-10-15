import {NgModule} from '@angular/core';
import {ThankYouComponent} from './thank-you.component';
import {ThankYouRoutingModule} from "./thank-you-routing.module";
import {SharedModule} from "../../shared/modules/shared.module";
import {StoreModule} from "@ngrx/store";
import {enterReducer, enterReducerKey} from "../../state/reducers/enter.reducer";
import {CardModule} from "primeng/card";
import {ButtonModule} from "primeng/button";
import {FormInputTextComponent} from "../../shared/components/form-input-text/form-input-text.component";
import {FormSelectComponent} from "../../shared/components/form-select/form-select.component";
import {PaginatorModule} from "primeng/paginator";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    ThankYouComponent
  ],
  imports: [
    SharedModule,
    StoreModule.forFeature(enterReducerKey, enterReducer),
    ThankYouRoutingModule,
    CardModule,
    ButtonModule,
    FormInputTextComponent,
    FormSelectComponent,
    PaginatorModule,
    ReactiveFormsModule
  ]
})
export class ThankYouModule { }
