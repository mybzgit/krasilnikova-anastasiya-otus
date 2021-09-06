import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExerciseComponent } from './exercise/exercise.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RecentlyAddedComponent } from './recently-added/recently-added.component';
import { SettingsComponent } from './settings/settings.component';


const routes: Routes = [
  { path: 'recently_added', component: RecentlyAddedComponent },
  { path: 'execise', component: ExerciseComponent },
  { path: 'settings', component: SettingsComponent },
  { path: '',   redirectTo: '/recently_added', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }