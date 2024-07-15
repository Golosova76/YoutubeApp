import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CustomButtonComponent } from 'app/shared/custom-button/custom-button.component';
import { InputComponent } from 'app/shared/input/input.component';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
  standalone: true,
  imports: [CommonModule, CustomButtonComponent, InputComponent],
})
export class SearchBarComponent {}
