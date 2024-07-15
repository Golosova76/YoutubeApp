import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

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

  handleButtonClick() {
    this.toggleSearch();
  }

  // передать событие клика дальше вверх к AppComponent
  @Output() toggleSearchEvent = new EventEmitter<void>();

  toggleSearch() {
    this.toggleSearchEvent.emit(); // запускаем событие при клике на кнопку
  }
}
