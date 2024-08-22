import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedInformationComponent } from './detailed-information.component';
import { provideMockStore } from '@ngrx/store/testing';

describe('DetailedInformationComponent', () => {
  let component: DetailedInformationComponent;
  let fixture: ComponentFixture<DetailedInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailedInformationComponent],
      providers: [provideMockStore()],
    }).compileComponents();

    fixture = TestBed.createComponent(DetailedInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
