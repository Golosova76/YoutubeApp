import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { InputComponent } from 'app/shared/input/input.component';
import { CustomButtonComponent } from 'app/shared/custom-button/custom-button.component';

@NgModule({
  declarations: [LoginFormComponent, LoginPageComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    InputComponent,
    CustomButtonComponent,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [LoginPageComponent],
})
export class AuthModule {}
