import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';

import { YoutubeRoutingModule } from './youtube-routing.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, YoutubeRoutingModule],
  providers: [provideHttpClient(withInterceptorsFromDi())],
})
export class YoutubeModule {}
