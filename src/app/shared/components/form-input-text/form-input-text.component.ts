import {Component, Input} from '@angular/core';
import {InputTextModule} from "primeng/inputtext";
import {ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR, ValidationErrors} from "@angular/forms";
import {FormErrorDisplayComponent} from "../form-error-display/form-error-display.component";

@Component({
  standalone: true,
  selector: 'roomex-form-input-text',
  templateUrl: './form-input-text.component.html',
  styleUrls: ['./form-input-text.component.css'],
  imports: [InputTextModule, FormsModule, FormErrorDisplayComponent],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: FormInputTextComponent,
      multi: true
    }
  ]
})
export class FormInputTextComponent implements ControlValueAccessor {
  value: string;

  @Input() id: string | null;
  @Input() label: string | null;
  @Input() errors: ValidationErrors | null | undefined;

  onChange: any = () => { };
  onTouched: any = () => { };

  constructor() { }

  hasChanged(): void {
    this.onChange(this.value);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  writeValue(value: string): void {
    this.value = value;
  }
}
