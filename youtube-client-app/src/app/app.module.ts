import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './core/footer/footer.component';

@NgModule({
  declarations: [],
  imports: [BrowserModule, AppRoutingModule, RouterModule, FooterComponent],
  providers: [],
})
export class AppModule {}
