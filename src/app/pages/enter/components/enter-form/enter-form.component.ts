import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {EnterFormModel} from "../../../../core/models/enter-form.model";
import {FormValidatorService} from "../../../../core/services/form-validator.service";
import {noDigitsValidator} from "../../../../core/validators/controls/no-digits-validator";
import {countriesAsSelectOptions} from "../../../../core/enums/countries.enum";
import {SelectOptionModel} from "../../../../core/models/select-option.model";
import {postCodeValidator} from "../../../../core/validators/form/post-code-validator";
import {FormValidatorsModel} from "../../../../core/models/form-validators.model";
import {EnterFormRawModel} from "../../../../core/models/enter-form-raw.model";

@Component({
  selector: 'roomex-enter-form',
  templateUrl: './enter-form.component.html',
  styleUrls: ['./enter-form.component.css'],
  providers: [FormValidatorService]
})
export class EnterFormComponent implements OnInit {
  enterForm: FormGroup<EnterFormModel>;
  countryOptions: SelectOptionModel[] = countriesAsSelectOptions();
  private formValidators: FormValidatorsModel;

  @Output() enterFormEmitter = new EventEmitter<EnterFormRawModel>();

  constructor(private formValidatorService: FormValidatorService) {}

  ngOnInit(): void {
    this.initForm();
  }

  private initForm(): void {
    this.enterForm = new FormGroup<EnterFormModel>({
      name: new FormControl(null),
      username: new FormControl(null),
      country: new FormControl(null),
      postCode: new FormControl(null),
      favouriteMovie: new FormControl(null)
    });
    this.formValidators = {
      controls: {
        name: [Validators.required, noDigitsValidator()],
        username: [Validators.email],
        country: [Validators.required],
      },
      form: [postCodeValidator()],
    };
  }

  onSubmit(): void {
    this.formValidatorService.setValidators(this.enterForm, this.formValidators);
    if (this.enterForm.valid) {
      this.enterFormEmitter.emit(this.enterForm.getRawValue());
    }
  }
}
