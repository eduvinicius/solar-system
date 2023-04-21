import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { planets } from 'mockData';
import { Planet } from 'src/planetInterface';

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

  planets: Planet[] = planets;
  planetsFiltered: Planet[] = [];

  ngOnInit(): void {
    const id: number = Number(this.route.snapshot.paramMap.get("id"));

    this.planetsFiltered = this.planets.filter(item => item.id === id);
  }

}
