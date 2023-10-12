import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
  declarations: [],
  exports: [
    TranslateModule
  ],
  imports: [
    CommonModule,
    TranslateModule
  ]
})
export class SharedModule { }
