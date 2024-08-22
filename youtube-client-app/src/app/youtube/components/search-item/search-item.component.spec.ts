import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { SearchItemComponent } from './search-item.component';
import { VideoItem } from 'app/shared/models/search-item.model';

describe('SearchItemComponent', () => {
  let component: SearchItemComponent;
  let fixture: ComponentFixture<SearchItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchItemComponent],
      providers: [provideMockStore()],
    }).compileComponents();

    fixture = TestBed.createComponent(SearchItemComponent);
    component = fixture.componentInstance;

    component.videoData = {
      id: '1',
      snippet: {
        title: 'Test Video',
        description: 'Test Description',
        thumbnails: {
          default: {
            url: 'http://example.com/default.jpg',
            width: 120,
            height: 90,
          },
        },
      },
    } as VideoItem;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
