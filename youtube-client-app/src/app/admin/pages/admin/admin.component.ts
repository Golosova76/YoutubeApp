import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { InputComponent } from 'app/shared/input/input.component';
import { CustomButtonComponent } from 'app/shared/custom-button/custom-button.component';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [ReactiveFormsModule, InputComponent, CustomButtonComponent],
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent {
  cardForm!: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder,
  ) {}

  onLogin() {}

  ngOnInit() {
    this.cardForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required], // Используйте 'description' вместо 'discription', если это опечатка
      imgCard: [''],
      linkVideo: [''],
    });
  }

  onCreateCard() {
    if (this.cardForm.valid) {
      console.log('Submitting card data:', this.cardForm.value);
      // Дальнейшая логика после отправки формы
    } else {
      console.error('Form is invalid');
    }
  }
}
