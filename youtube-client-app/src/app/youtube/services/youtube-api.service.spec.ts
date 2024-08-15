import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { YoutubeApiService } from './youtube-api.service';
import { YouTubeVideoListResponse } from 'app/shared/models/search-response.model';
import { YouTubeSearchResponse } from 'app/shared/models/search-list-api.model';

describe('YoutubeApiService', () => {
  let service: YoutubeApiService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], // Добавляем HttpClientTestingModule
      providers: [YoutubeApiService],
    });

    service = TestBed.inject(YoutubeApiService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify(); // Проверяем, что нет незавершенных запросов
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should search videos and return results', () => {
    const mockResponse = {
      items: [
        {
          id: { videoId: '123' },
          snippet: { title: 'Test Video' },
        },
      ],
    } as YouTubeSearchResponse;

    service.searchVideos('test').subscribe((response) => {
      expect(response.items.length).toBe(1);
      expect(response.items[0].snippet.title).toBe('Test Video');
    });

    const req = httpTestingController.expectOne((request) =>
      request.url.includes('youtube/v3/search'),
    );
    expect(req.request.method).toEqual('GET');
    req.flush(mockResponse); // Возвращаем мок-ответ
  });

  it('should get video statistics', () => {
    const mockResponse = {
      items: [
        {
          id: '123',
          snippet: { title: 'Test Video' },
          statistics: { viewCount: '100' },
        },
      ],
    } as YouTubeVideoListResponse;

    service.getVideoStatistics(['123']).subscribe((response) => {
      expect(response.items.length).toBe(1);
      expect(response.items[0].id).toBe('123');
      expect(response.items[0].statistics.viewCount).toBe('100');
    });

    const req = httpTestingController.expectOne((request) =>
      request.url.includes('youtube/v3/videos'),
    );
    expect(req.request.method).toEqual('GET');
    req.flush(mockResponse); // Возвращаем мок-ответ
  });

  it('should search and fetch video details', () => {
    const searchResponse = {
      items: [{ id: { videoId: '123' } }],
    } as YouTubeSearchResponse;

    const detailsResponse = {
      items: [
        {
          id: '123',
          snippet: { title: 'Test Video' },
          statistics: { viewCount: '100' },
        },
      ],
    } as YouTubeVideoListResponse;

    service.searchAndFetchDetails('test').subscribe((videos) => {
      expect(videos.length).toBe(1);
      expect(videos[0].snippet.title).toBe('Test Video');
    });

    const searchReq = httpTestingController.expectOne((request) =>
      request.url.includes('youtube/v3/search'),
    );
    expect(searchReq.request.method).toEqual('GET');
    searchReq.flush(searchResponse);

    const detailsReq = httpTestingController.expectOne((request) =>
      request.url.includes('youtube/v3/videos'),
    );
    expect(detailsReq.request.method).toEqual('GET');
    detailsReq.flush(detailsResponse);
  });
});
