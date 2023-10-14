import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, ValidatorFn, Validators} from "@angular/forms";
import {EnterFormModel} from "../../../../core/models/enter-form.model";
import {FormValidatorService} from "../../../../core/services/form-validator.service";
import {noDigitsValidator} from "../../../../core/form-validations/no-digits-validator";

@Component({
  selector: 'roomex-enter-form',
  templateUrl: './enter-form.component.html',
  styleUrls: ['./enter-form.component.css'],
  providers: [FormValidatorService]
})
export class EnterFormComponent implements OnInit {
  enterForm: FormGroup<EnterFormModel>;
  formValidators: { [key: string]: ValidatorFn[] };

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
      name: [Validators.required, noDigitsValidator()],
      username: [Validators.email],
      country: [Validators.required],
    };
  }

  onSubmit(): void {
    this.formValidatorService.setValidators(this.enterForm, this.formValidators);
    if (this.enterForm.valid) {
      console.log(this.enterForm.value);
    }
  }
}
