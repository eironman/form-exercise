import {NgModule} from '@angular/core';
import {EnterComponent} from './enter.component';
import {EnterRoutingModule} from "./enter-routing.module";
import {ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "../../shared/modules/shared.module";
import {EnterFormComponent} from './components/enter-form/enter-form.component';
import {ButtonModule} from "primeng/button";
import {FormInputTextComponent} from "../../shared/components/form-input-text/form-input-text.component";
import {FormSelectComponent} from "../../shared/components/form-select/form-select.component";

@NgModule({
  declarations: [
    EnterComponent,
    EnterFormComponent
  ],
  imports: [
    SharedModule,
    EnterRoutingModule,
    ReactiveFormsModule,
    ButtonModule,
    FormInputTextComponent,
    FormSelectComponent
  ]
})
export class EnterModule { }
