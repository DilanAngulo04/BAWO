import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  providers: [NgbCarouselConfig]
})
export class SliderComponent{

  //images = [700, 533, 807, 124].map((n) => `https://picsum.photos/id/${n}/900/500`);
  // <img [src]="images[0]" alt="Random first slide" width="100%" height="100%">
  //<ngb-carousel *ngIf="images" style="border: none;">


  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 10000;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = false;
  }

}
