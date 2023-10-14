import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {FormsModule, ValidationErrors} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";
import {SharedModule} from "../../modules/shared.module";

@Component({
  standalone: true,
  selector: 'roomex-form-error-display',
  templateUrl: './form-error-display.component.html',
  styleUrls: ['./form-error-display.component.css'],
  imports: [SharedModule],
})
export class FormErrorDisplayComponent implements OnChanges {
  errorKeys: string[];

  @Input() errors: ValidationErrors | null | undefined;

  ngOnChanges() {
    this.getErrorKeys();
  }

  private getErrorKeys(): void {
    this.errorKeys = this.errors ? Object.keys(this.errors) : [];
  }
}
