import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/features/home/home.component';
import { PlanetsListComponent } from './modules/features/planets-list/planets-list.component';
import { AboutComponent } from './modules/features/about/about.component';
import { PlanetComponent } from './modules/features/planet/planet.component';
import { PageNotFoundComponent } from './modules/features/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'planetas', children: [
    { path: '', redirectTo: 'lista', pathMatch: 'full' },
    { path: 'lista', component: PlanetsListComponent },
    { path: ':id', component: PlanetComponent },
    { path: '**', component: PageNotFoundComponent }
  ]},
  { path: 'sobre', component: AboutComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
