import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-input',
  standalone: true,
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  imports: [CommonModule],
})
export class InputComponent {
  @Input() placeholder: string = '';

  @Input() type: string = 'text';

  @Input() label: string = '';

  @Input() inputClass: string = '';

  @Input() name: string = '';

  @Input() id: string = '';

  @ViewChild('inputField', { static: true })
  // eslint-disable-next-line indent
  inputField!: ElementRef<HTMLInputElement>;

  get value(): string {
    return this.inputField.nativeElement.value;
  }
}
