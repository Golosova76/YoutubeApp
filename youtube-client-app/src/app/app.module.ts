import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './core/footer/footer.component';
import { SearchBarComponent } from './features/search/search-bar/search-bar.component';
import { SearchResultsComponent } from './features/search/search-results/search-results.component';
import { SearchItemComponent } from './features/search/search-item/search-item.component';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule, // Необходим для анимаций Material
    MatButtonModule,
    MatIconModule,
    AppComponent,
    FooterComponent,
    SearchBarComponent,
    SearchItemComponent,
    SearchResultsComponent,
  ],
  providers: [],
})
export class AppModule {}
