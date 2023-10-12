import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ThankYouComponent} from './thank-you.component';
import {ThankYouRoutingModule} from "./thank-you-routing.module";

@NgModule({
  declarations: [
    ThankYouComponent
  ],
  imports: [
    CommonModule,
    ThankYouRoutingModule
  ]
})
export class ThankYouModule { }
