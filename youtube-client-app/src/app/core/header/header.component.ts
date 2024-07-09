import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { InputComponent } from 'app/shared/input/input.component';
import { CustomButtonComponent } from 'app/shared/custom-button/custom-button.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    InputComponent,
    MatIconModule,
    CustomButtonComponent,
  ],
})
export class HeaderComponent {
  // eslint-disable-next-line class-methods-use-this
  onSearch() {
    console.log('Search initiated');
    // Тут может быть реализация логики поиска или вызов сервиса
  }

  // eslint-disable-next-line class-methods-use-this
  handleButtonClick() {}
}
