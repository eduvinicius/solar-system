import { Component } from '@angular/core';
import { slide } from '../../animations/animations'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [slide]
})
export class AboutComponent {

}
