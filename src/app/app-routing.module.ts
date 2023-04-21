import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PlanetsListComponent } from './pages/planets-list/planets-list.component';
import { AboutComponent } from './pages/about/about.component';
import { PlanetComponent } from './pages/planet/planet.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'planetas', children: [
    {path: 'lista-planetas', component: PlanetsListComponent},
    {path: 'detalhes/:id', component: PlanetComponent}
  ]},
  {path: 'sobre', component: AboutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
