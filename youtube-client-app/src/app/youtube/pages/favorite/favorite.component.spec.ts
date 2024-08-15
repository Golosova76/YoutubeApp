import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing'; // Импортируем provideMockStore
import { FavoriteVideosComponent } from './favorite.component';

describe('FavoriteComponent', () => {
  let component: FavoriteVideosComponent;
  let fixture: ComponentFixture<FavoriteVideosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FavoriteVideosComponent],
      providers: [
        provideMockStore(), // Добавляем provideMockStore для предоставления Store
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(FavoriteVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
