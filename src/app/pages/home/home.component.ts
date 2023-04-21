import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { fade } from 'src/app/animations/animations';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('zoomIn', [
      state('normal', style({
        transform: 'scale(1)'
      })),
      state('zoom', style({
        transform: 'scale(1.3)'
      })),
      transition('normal <=> zoom', animate('200ms ease-in-out'))
    ]),
    [fade]
  ]
})
export class HomeComponent implements OnInit {

  state = 'normal';
  containerState = 'normal';

  onMouseOver() {
    this.state = 'zoom';
  }

  onMouseLeave() {
    this.state = 'normal';
  }

  ngOnInit(): void {
    this.containerState = 'void';
    setTimeout(() => {
      this.containerState = 'normal';
    }, 300);
  }
}
