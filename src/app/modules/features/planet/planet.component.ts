import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { planets } from 'planet.mock';
import { IPlanet } from 'src/planet.interface';

import { slideInFromTop } from 'src/app/animations/animations';

@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.scss'],
  animations: [slideInFromTop]
})
export class PlanetComponent implements OnInit {

  constructor(
    private route: ActivatedRoute
  ) {}

  planets: IPlanet[] = planets;
  planetsFiltered: IPlanet[] = [];

  ngOnInit(): void {
    const id: number = Number(this.route.snapshot.paramMap.get("id"));

    this.planetsFiltered = this.planets.filter(item => item.id === id);
  }

}

