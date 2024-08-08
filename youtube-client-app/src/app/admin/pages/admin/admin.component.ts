import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { InputComponent } from 'app/shared/input/input.component';
import { CustomButtonComponent } from 'app/shared/custom-button/custom-button.component';
import { futureDateValidator } from 'app/shared/utils/validators';
import { getErrorMessage } from 'app/shared/utils/error-messages';
import { CustomCard } from 'app/shared/models/search-item.model';
import { Store } from '@ngrx/store';
import { addCustomCard } from 'app/redux/actions/actions';
import { generateUUID } from 'app/shared/utils/utils';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputComponent,
    CustomButtonComponent,
  ],
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent {
  cardForm!: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private store: Store<{ customCards: CustomCard }>,
  ) {}

  ngOnInit() {
    this.cardForm = this.fb.group({
      title: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
        ],
      ],
      description: ['', [Validators.maxLength(255)]],
      imgCard: ['', Validators.required],
      linkVideo: ['', Validators.required],
      createDate: ['', [Validators.required, futureDateValidator]],
      tags: this.fb.array([this.createTagInput()]),
    });
  }

  getInputClass(fieldName: string): string {
    const control = this.cardForm.get(fieldName);
    if (control && control.invalid && (control.dirty || control.touched)) {
      return `${fieldName}-input error-border`;
    } else {
      return `${fieldName}-input`;
    }
  }

  isControlInvalid(controlName: string): boolean {
    const control = this.cardForm.get(controlName);
    return !!(control && control.invalid && (control.dirty || control.touched));
  }

  getErrorMessage(controlName: string): string | null {
    const control = this.cardForm.get(controlName);
    return getErrorMessage(controlName, control);
  }

  createTagInput(): FormControl {
    return this.fb.control('', Validators.required);
  }

  get tags(): FormArray {
    return this.cardForm.get('tags') as FormArray;
  }

  addTag() {
    if (this.tags.length < 5) {
      this.tags.push(this.createTagInput());
    }
  }

  removeTag(index: number) {
    this.tags.removeAt(index);
  }

  resetForm() {
    // Очищаем все теги, кроме первого
    while (this.tags.length > 1) {
      this.tags.removeAt(1);
    }
    // Сбрасываем значение первого тега
    this.tags.at(0).reset();

    // Сбрасываем остальные поля формы к начальным значениям
    this.cardForm.reset({
      title: '',
      description: '',
      imgCard: '',
      linkVideo: '',
      createDate: '',
      tags: this.tags.value, // Передаем текущее значение массива тегов после сброса
    });
  }

  onCreateCard() {
    if (this.cardForm.valid) {
      console.log('Submitting card data:', this.cardForm.value);
      const formData = this.cardForm.value;

      const creationDate = new Date(formData.createDate);

      // Создаем объект CustomCard
      const newCard: CustomCard = {
        id: generateUUID(),
        title: formData.title,
        description: formData.description,
        imageUrl: formData.imgCard,
        videoUrl: formData.linkVideo,
        creationDate: creationDate,
      };

      // Диспатчим действие для добавления карточки
      console.log(newCard);
      this.store.dispatch(addCustomCard({ card: newCard }));
      this.resetForm();
    } else {
      this.cardForm.markAllAsTouched();
      console.error('Form is invalid');
    }
  }
}
