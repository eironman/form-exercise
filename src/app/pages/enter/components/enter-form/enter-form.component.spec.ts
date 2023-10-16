import {ComponentFixture, TestBed} from '@angular/core/testing';
import {EnterFormComponent} from './enter-form.component';
import {FormInputTextComponent} from "../../../../shared/components/form-input-text/form-input-text.component";
import {FormSelectComponent} from "../../../../shared/components/form-select/form-select.component";
import {ButtonModule} from "primeng/button";
import {TranslateModule} from "@ngx-translate/core";
import {FormGroup, ReactiveFormsModule} from "@angular/forms";
import {FormValidatorService} from "../../../../core/services/form-validator.service";
import {FormMovieComponent} from "../../../../shared/components/form-movie/form-movie.component";
import {HttpClientModule} from "@angular/common/http";
import {FormValidatorsModel} from "../../../../core/models/form-validators.model";

describe('EnterFormComponent', () => {
  let component: EnterFormComponent;
  let fixture: ComponentFixture<EnterFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnterFormComponent],
      imports: [
        TranslateModule.forRoot(),
        ReactiveFormsModule,
        HttpClientModule,
        FormInputTextComponent,
        FormSelectComponent,
        FormMovieComponent,
        ButtonModule
      ],
      providers: [FormValidatorService]
    });
    fixture = TestBed.createComponent(EnterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should init form', () => {
    component.ngOnInit();
    const form = component.enterForm;

    expect(form.value.name).toBe(null);
    expect(form.value.username).toBe(null);
    expect(form.value.country).toBe(null);
    expect(form.value.postCode).toBe(null);
    expect(form.value.favouriteMovie).toBe(null);
  });

  it('should set validators and emit', () => {
    const service = fixture.debugElement.injector.get(FormValidatorService);
    const formValidatorServiceSpy = spyOn(service , 'setValidators');
    const formEmitterSpy = spyOn(component.enterFormEmitter , 'emit');
    component.ngOnInit();
    fixture.nativeElement.querySelector('button')?.click();

    expect(formValidatorServiceSpy).toHaveBeenCalledWith(component.enterForm, component.formValidators);
    expect(formEmitterSpy).toHaveBeenCalled();
  });

  it('should set validators and not emit', () => {
    const service = fixture.debugElement.injector.get(FormValidatorService);
    const formValidatorServiceSpy = spyOn(service , 'setValidators')
      .and.callFake((form: FormGroup, validators: FormValidatorsModel) => {
        form.get('name')?.setValidators(validators.controls?.['name']);
        form.get('name')?.updateValueAndValidity();
      });
    const formEmitterSpy = spyOn(component.enterFormEmitter , 'emit');
    component.ngOnInit();
    fixture.nativeElement.querySelector('button')?.click();

    expect(formValidatorServiceSpy).toHaveBeenCalledWith(component.enterForm, component.formValidators);
    expect(formEmitterSpy).toHaveBeenCalledTimes(0);
  });
});
