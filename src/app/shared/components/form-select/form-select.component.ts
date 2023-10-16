import {Component, Input} from '@angular/core';
import {ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR, ValidationErrors} from "@angular/forms";
import {DropdownModule} from "primeng/dropdown";
import {FormErrorDisplayComponent} from "../form-error-display/form-error-display.component";
import {SelectOptionModel} from "../../../core/models/select-option.model";

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

  @Input() id: string | undefined;
  @Input() label: string | undefined;
  @Input() options: SelectOptionModel[];
  @Input() errors: ValidationErrors | null | undefined;

  constructor() { }

  hasChanged(): void {
    this.onChange(this.value);
  }


  // ControlValueAccessor interface
  onChange: any = () => { };
  onTouched: any = () => { };

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
