import {Component, OnInit} from '@angular/core';
import {EnterFormModel} from "../../core/models/enter-form.model";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-enter',
  templateUrl: './enter.component.html',
  styleUrls: ['./enter.component.css']
})
export class EnterComponent implements OnInit {
  enterForm: FormGroup<EnterFormModel>;

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
  }
}
