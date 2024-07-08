import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import AppComponent from './app.component';
import AppRoutingModule from './app-routing.module';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { SearchBarComponent } from './features/search/search-bar/search-bar.component';
import { SearchResultsComponent } from './features/search/search-results/search-results.component';
import { SearchItemComponent } from './features/search/search-item/search-item.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent, SearchBarComponent, SearchResultsComponent, SearchItemComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export default class AppModule {}
