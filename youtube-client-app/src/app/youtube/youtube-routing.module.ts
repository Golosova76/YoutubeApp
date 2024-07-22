import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchResultsComponent } from './pages/search-results/search-results.component';
import { DetailedInformationComponent } from './pages/detailed-information/detailed-information.component';

const routes: Routes = [
  { path: '', component: SearchResultsComponent },
  { path: '', component: DetailedInformationComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YoutubeRoutingModule {}
