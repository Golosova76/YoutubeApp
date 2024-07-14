import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

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
}
