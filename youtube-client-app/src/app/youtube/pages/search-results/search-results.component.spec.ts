import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchItemComponent } from 'app/youtube/components/search-item/search-item.component';

describe('SearchItemComponent', () => {
  let component: SearchItemComponent;
  let fixture: ComponentFixture<SearchItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SearchItemComponent], // Здесь только imports
    });
    fixture = TestBed.createComponent(SearchItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
