import {Component, OnInit} from '@angular/core';
import {EnterStateService} from "../../core/services/state/enter-state.service";
import {first} from "rxjs";
import {Router} from "@angular/router";
import {EnterFormRawModel} from "../../core/models/enter-form-raw.model";

@Component({
  selector: 'roomex-thank-you',
  templateUrl: './thank-you.component.html',
  styleUrls: ['./thank-you.component.css']
})
export class ThankYouComponent implements OnInit {
  enterForm: EnterFormRawModel;

  constructor(private router: Router,
              private enterStateService: EnterStateService) {}

  ngOnInit(): void {
    this.subscribeToEnterForm();
  }

  private subscribeToEnterForm(): void {
    this.enterStateService.getEnterForm()
      .pipe(first())
      .subscribe(form => {
        if (form ===  null) {
          this.router.navigate(['/']);
        } else {
          this.enterForm = form;
        }
      });
  }
}
