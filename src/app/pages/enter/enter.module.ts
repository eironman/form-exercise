import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnterComponent } from './enter.component';
import {EnterRoutingModule} from "./enter-routing.module";

@NgModule({
  declarations: [
    EnterComponent
  ],
  imports: [
    CommonModule,
    EnterRoutingModule
  ]
})
export class EnterModule { }
