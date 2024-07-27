import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';
import { Subject } from 'rxjs';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true,
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
})
export class InputComponent {
  @Input() placeholder: string = '';

  @Input() type: string = 'text';

  @Input() label: string = '';

  @Input() inputClass: string = '';

  @Input() name: string = '';

  @Input() id: string = '';

  @Input() searchControl?: FormControl;

  @Output() valueChange = new EventEmitter<string>();

  @ViewChild('inputField', { static: false })
  // eslint-disable-next-line indent
  inputField!: ElementRef<HTMLInputElement>;

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
}
