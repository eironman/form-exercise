import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, ValidatorFn, Validators} from "@angular/forms";
import {EnterFormModel} from "../../../../core/models/enter-form.model";
import {FormValidatorService} from "../../../../core/services/form-validator.service";

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
      name: [Validators.required],
      username: [Validators.email]
    };
  }

  onSubmit(): void {
    this.formValidatorService.validate(this.enterForm, this.formValidators);
    if (this.enterForm.valid) {
      console.log('valid');
    }
  }
}
