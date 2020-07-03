import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  customOptions: OwlOptions = {
    loop:true,
		margin:30,
		nav: true,
    dots: true,
    autoplay:true,
    autoplayTimeout:1000,
		autoplaySpeed: 2000,
    navSpeed: 2000,
		navText: ['<i class="flaticon-left-arrow"></i>', '<i class="flaticon-right-arrow"></i>'],
		responsive:{
			0:{
				items:1
			},
			
			480:{
				items:2
			},			
			
			991:{
				items:2
			},
			1000:{
				items:3
			}
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
