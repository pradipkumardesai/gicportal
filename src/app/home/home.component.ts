import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap/carousel/carousel-config';

@Component({
  selector: 'wk-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  images = ['assets/images/image1.JPG', 'assets/images/image2.JPG', 'assets/images/image3.JPG'];
  constructor(private config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    this.config.interval = 3000;
    this.config.wrap = false;
    this.config.keyboard = false;
    
    //this.config.pauseOnHover = false;
  }

  ngOnInit() {
  }

}
