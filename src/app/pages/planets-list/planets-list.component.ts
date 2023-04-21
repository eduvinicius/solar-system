import { Component } from '@angular/core';

import { planets } from 'mockData';

import { slideInFromBottom } from 'src/app/animations/animations';

@Component({
  selector: 'app-planets-list',
  templateUrl: './planets-list.component.html',
  styleUrls: ['./planets-list.component.scss'],
  animations: [slideInFromBottom]
})
export class PlanetsListComponent {

  constructor() {}

  planets = planets

}
