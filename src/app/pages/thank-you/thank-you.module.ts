import {NgModule} from '@angular/core';
import {ThankYouComponent} from './thank-you.component';
import {ThankYouRoutingModule} from "./thank-you-routing.module";
import {SharedModule} from "../../shared/modules/shared.module";
import {StoreModule} from "@ngrx/store";
import {enterReducer, enterReducerKey} from "../../state/reducers/enter.reducer";

@NgModule({
  declarations: [
    ThankYouComponent
  ],
  imports: [
    SharedModule,
    StoreModule.forFeature(enterReducerKey, enterReducer),
    ThankYouRoutingModule
  ]
})
export class ThankYouModule { }
