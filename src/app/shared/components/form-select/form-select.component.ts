import {Component, Input} from '@angular/core';
import {ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR, ValidationErrors} from "@angular/forms";
import {DropdownModule} from "primeng/dropdown";
import {FormErrorDisplayComponent} from "../form-error-display/form-error-display.component";

@Component({
  standalone: true,
  selector: 'roomex-form-select',
  templateUrl: './form-select.component.html',
  styleUrls: ['./form-select.component.css'],
  imports: [DropdownModule, FormsModule, FormErrorDisplayComponent],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: FormSelectComponent,
      multi: true
    }
  ]
})
export class FormSelectComponent implements ControlValueAccessor {
  value: any | null = null;
  options = [
    {
      value: 'id',
      label: 'España'
    }
  ];

  @Input() id: string | undefined;
  @Input() label: string | undefined;
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
