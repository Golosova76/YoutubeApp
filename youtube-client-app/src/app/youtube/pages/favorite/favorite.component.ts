import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBackward } from '@fortawesome/free-solid-svg-icons';

import { SearchItemComponent } from '../../components/search-item/search-item.component';
import { CustomButtonComponent } from 'app/shared/custom-button/custom-button.component';
import { Store } from '@ngrx/store';
import { AppState } from 'app/redux/state/app.state';
import { Observable, Subject, takeUntil } from 'rxjs';
import { VideoItem } from 'app/shared/models/search-item.model';
import { selectFavoriteVideos } from 'app/redux/selectors/favorite.selectors';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favorite',
  standalone: true,
  imports: [
    CommonModule,
    SearchItemComponent,
    FontAwesomeModule,
    CustomButtonComponent,
  ],
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss'],
})
export class FavoriteVideosComponent implements OnInit {
  favoriteVideos: VideoItem[] = [];
  private destroy$ = new Subject<void>();

  faBackward = faBackward;

  constructor(
    private store: Store<AppState>,
    private router: Router,
  ) {}

  ngOnInit(): void {
    // Подписываемся на селектор избранных видео
    this.store
      .select(selectFavoriteVideos)
      .pipe(takeUntil(this.destroy$))
      .subscribe((videos) => {
        this.favoriteVideos = videos;
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  navigateToDetail() {
    this.router.navigate(['youtube', 'search-results']);
  }
}
