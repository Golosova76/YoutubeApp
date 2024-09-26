import { CommonModule } from '@angular/common';
import { Component, effect, OnInit } from '@angular/core';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBackward } from '@fortawesome/free-solid-svg-icons';

import { SearchItemComponent } from '../../components/search-item/search-item.component';
import { CustomButtonComponent } from 'app/shared/custom-button/custom-button.component';
import { Store } from '@ngrx/store';
import { AppState } from 'app/redux/state/app.state';
import { Subject, takeUntil } from 'rxjs';
import { VideoItem } from 'app/shared/models/search-item.model';
import { selectFavoriteVideos } from 'app/redux/selectors/favorite.selectors';
import { Router } from '@angular/router';
import { FavoriteService } from 'app/youtube/services/favorite.service';

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
  favoriteVideosSignal = this.favoriteService.favoriteVideos;

  faBackward = faBackward;

  constructor(
    private favoriteService: FavoriteService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.favoriteVideosSignal();
  }

  navigateToDetail() {
    this.router.navigate(['youtube', 'search-results']);
  }
}
