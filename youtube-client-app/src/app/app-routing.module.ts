import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './core/guards/auth/auth.guard';
import { NotFoundComponent } from './core/notFound/notFound.component';
import { NoAuthGuard } from './core/guards/no-auth/no-auth.guard';
import { AdminComponent } from './admin/pages/admin/admin.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/auth' },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
    canActivate: [NoAuthGuard],
  },
  {
    path: 'youtube',
    canActivate: [authGuard],
    children: [
      { path: '', redirectTo: 'search-results', pathMatch: 'full' },
      {
        path: 'search-results',
        loadComponent: () =>
          import(
            './youtube/pages/search-results/search-results.component'
          ).then((m) => m.SearchResultsComponent),
      },
      {
        path: 'detailed-information/:id',
        loadComponent: () =>
          import(
            './youtube/pages/detailed-information/detailed-information.component'
          ).then((m) => m.DetailedInformationComponent),
      },
      {
        path: 'favorite',
        loadComponent: () =>
          import('./youtube/pages/favorite/favorite.component').then(
            (m) => m.FavoriteVideosComponent,
          ),
      },
    ],
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [authGuard],
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
