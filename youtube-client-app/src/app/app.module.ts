import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './core/footer/footer.component';
import { videosReducer } from './redux/reducers/video.reducer';
import { VideoEffects } from './redux/effects/video.effects';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FooterComponent,
    StoreModule.forRoot({ videos: videosReducer }),
    EffectsModule.forRoot([VideoEffects]),
  ],
  providers: [provideHttpClient(withInterceptorsFromDi())],
})
export class AppModule {}
