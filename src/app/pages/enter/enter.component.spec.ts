import {ComponentFixture, TestBed} from '@angular/core/testing';

import {EnterComponent} from './enter.component';
import {StoreModule} from "@ngrx/store";
import {EnterFormComponent} from "./components/enter-form/enter-form.component";
import {FormInputTextComponent} from "../../shared/components/form-input-text/form-input-text.component";
import {FormSelectComponent} from "../../shared/components/form-select/form-select.component";
import {TranslateModule} from "@ngx-translate/core";
import {ReactiveFormsModule} from "@angular/forms";
import {ButtonModule} from "primeng/button";
import {CardModule} from "primeng/card";
import {FormMovieComponent} from "../../shared/components/form-movie/form-movie.component";
import {HttpClientModule} from "@angular/common/http";

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
        HttpClientModule,
        ReactiveFormsModule,
        FormInputTextComponent,
        FormSelectComponent,
        FormMovieComponent,
        ButtonModule,
        CardModule
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
