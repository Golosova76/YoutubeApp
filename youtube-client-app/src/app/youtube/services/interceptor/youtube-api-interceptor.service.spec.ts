import { TestBed } from '@angular/core/testing';

import { YoutubeApiInterceptorService } from './youtube-api-interceptor.service';

describe('YoutubeApiInterceptorService', () => {
  let service: YoutubeApiInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YoutubeApiInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
