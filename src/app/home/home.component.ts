import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wk-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  images = ['assets/images/image1.JPG', 'assets/images/image2.JPG', 'assets/images/image3.JPG'];
  constructor() {
    
  }

  ngOnInit() {
  }

}
