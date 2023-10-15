import {ComponentFixture, TestBed} from '@angular/core/testing';
import {EnterFormComponent} from './enter-form.component';
import {FormInputTextComponent} from "../../../../shared/components/form-input-text/form-input-text.component";
import {FormSelectComponent} from "../../../../shared/components/form-select/form-select.component";
import {ButtonModule} from "primeng/button";
import {TranslateModule} from "@ngx-translate/core";
import {ReactiveFormsModule} from "@angular/forms";
import {FormValidatorService} from "../../../../core/services/form-validator.service";

describe('EnterFormComponent', () => {
  let component: EnterFormComponent;
  let fixture: ComponentFixture<EnterFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnterFormComponent],
      imports: [
        TranslateModule.forRoot(),
        ReactiveFormsModule,
        FormInputTextComponent,
        FormSelectComponent,
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
    const formElement: HTMLElement = fixture.nativeElement;
    const formButton = formElement.querySelector('button');
    component.ngOnInit();
    if (formButton) {
      formButton.click();
    }
    expect(formValidatorServiceSpy).toHaveBeenCalledWith(component.enterForm, component.formValidators);
    expect(formEmitterSpy).toHaveBeenCalled();
  });
});
