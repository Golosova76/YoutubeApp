import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './core/guards/auth/auth.guard';
import { NotFoundComponent } from './core/notFound/notFound.component';
import { NoAuthGuard } from './core/guards/no-auth/no-auth.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/auth' },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
    canActivate: [NoAuthGuard],
  },
  {
    path: 'youtube',
    loadChildren: () =>
      import('./youtube/youtube-routing.module').then(
        (m) => m.YoutubeRoutingModule,
      ),
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
