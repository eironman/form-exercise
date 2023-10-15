import {ComponentFixture, TestBed} from '@angular/core/testing';

import {EnterComponent} from './enter.component';
import {StoreModule} from "@ngrx/store";
import {EnterFormComponent} from "./components/enter-form/enter-form.component";
import {FormInputTextComponent} from "../../shared/components/form-input-text/form-input-text.component";
import {FormSelectComponent} from "../../shared/components/form-select/form-select.component";
import {TranslateModule} from "@ngx-translate/core";
import {ReactiveFormsModule} from "@angular/forms";
import {ButtonModule} from "primeng/button";

describe('EnterComponent', () => {
  let component: EnterComponent;
  let fixture: ComponentFixture<EnterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        EnterComponent,
        EnterFormComponent
      ],
      imports: [
        StoreModule.forRoot({}),
        TranslateModule.forRoot(),
        ReactiveFormsModule,
        FormInputTextComponent,
        FormSelectComponent,
        ButtonModule
      ]
    });
    fixture = TestBed.createComponent(EnterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
