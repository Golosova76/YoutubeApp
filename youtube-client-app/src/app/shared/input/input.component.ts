import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-input',
  standalone: true,
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  imports: [CommonModule, MatFormFieldModule, MatInputModule, MatButtonModule],
})
export class InputComponent {
  @Input() placeholder: string = '';

  @Input() type: string = 'text';

  @Input() label: string = '';
}
