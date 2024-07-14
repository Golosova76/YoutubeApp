import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

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
    AppComponent,
    FooterComponent,
    SearchBarComponent,
    SearchItemComponent,
    SearchResultsComponent,
  ],
  providers: [],
})
export class AppModule {}
