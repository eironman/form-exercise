import {NgModule} from '@angular/core';
import {EnterComponent} from './enter.component';
import {EnterRoutingModule} from "./enter-routing.module";
import {ReactiveFormsModule} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";
import {SharedModule} from "../../shared/shared.module";

@NgModule({
  declarations: [
    EnterComponent
  ],
  imports: [
    SharedModule,
    EnterRoutingModule,
    ReactiveFormsModule,
    InputTextModule
  ]
})
export class EnterModule { }
