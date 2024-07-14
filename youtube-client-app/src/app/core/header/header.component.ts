import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { InputComponent } from 'app/shared/input/input.component';
import { CustomButtonComponent } from 'app/shared/custom-button/custom-button.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [CommonModule, InputComponent, CustomButtonComponent],
})
export class HeaderComponent {
  // eslint-disable-next-line class-methods-use-this
  onSearch() {}

  // eslint-disable-next-line class-methods-use-this
  handleButtonClick() {}
}
