import {NgModule} from '@angular/core';
import {ThankYouComponent} from './thank-you.component';
import {ThankYouRoutingModule} from "./thank-you-routing.module";
import {SharedModule} from "../../shared/shared.module";

@NgModule({
  declarations: [
    ThankYouComponent
  ],
  imports: [
    SharedModule,
    ThankYouRoutingModule
  ]
})
export class ThankYouModule { }
