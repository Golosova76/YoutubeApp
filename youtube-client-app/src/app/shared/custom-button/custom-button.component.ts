import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-custom-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.scss'],
})
export class CustomButtonComponent {
  @Input() isIconBtn: boolean = true;

  // @Input() iconButton: boolean = false;

  // @Input() raisedButton: boolean = false;

  @Input() buttonType: string = 'default';
}
