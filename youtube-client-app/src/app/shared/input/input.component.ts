import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  EventEmitter,
  forwardRef,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true,
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
})
export class InputComponent implements ControlValueAccessor, OnInit {
  @Input() placeholder: string = '';

  @Input() type: string = 'text';

  @Input() label: string = '';

  @Input() inputClass: string = '';

  @Input() name: string = '';

  @Input() id: string = '';

  @Input() searchControl?: FormControl;

  @Input() classObject: string = '';

  @Output() valueChange = new EventEmitter<string>();

  @ViewChild('inputField', { static: false })
  // eslint-disable-next-line indent
  inputField!: ElementRef<HTMLInputElement>;

  private onChange: (value: string) => void = () => {};

  public onTouched: () => void = () => {};

  ngOnInit() {
    // Подписываемся на изменения в searchControl
    if (this.searchControl) {
      this.searchControl.valueChanges.subscribe((value) => {
        this.valueChange.emit(value);
      });
    }
  }

  get value(): string {
    return this.inputField.nativeElement.value;
  }

  // Реализация методов ControlValueAccessor
  writeValue(value: string): void {
    if (this.inputField) {
      this.inputField.nativeElement.value = value || '';
    }
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    if (this.inputField) {
      this.inputField.nativeElement.disabled = isDisabled;
    }
  }

  onInput(value: string): void {
    this.onChange(value);
    this.valueChange.emit(value);
  }
}
