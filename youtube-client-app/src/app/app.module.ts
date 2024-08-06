import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './core/footer/footer.component';
import { videoReducer } from './redux/reducers/video.reducer';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FooterComponent,
    StoreModule.forRoot({}), // Основное состояние без редьюсеров
    StoreModule.forFeature('videos', videoReducer),
  ],
  providers: [provideHttpClient(withInterceptorsFromDi())],
})
export class AppModule {}
