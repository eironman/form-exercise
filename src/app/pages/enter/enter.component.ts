import {Component} from '@angular/core';
import {EnterStateService} from "../../core/services/state/enter-state.service";
import {Router} from "@angular/router";
import {EnterFormRawModel} from "../../core/models/enter-form-raw.model";

@Component({
  selector: 'roomex-enter',
  templateUrl: './enter.component.html',
  styleUrls: ['./enter.component.css']
})
export class EnterComponent {
  constructor(private router: Router,
              private enterStateService: EnterStateService) {}

  onFormSubmit(enterForm: EnterFormRawModel): void {
    this.enterStateService.saveEnterForm(enterForm);
    this.router.navigate(['/thank-you']);
  }
}
