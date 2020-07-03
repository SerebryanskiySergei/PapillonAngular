import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-advantages',
  templateUrl: './advantages.component.html',
  styleUrls: ['./advantages.component.css']
})
export class AdvantagesComponent implements OnInit {


  customOptions: OwlOptions = {
    loop:true,
		nav:true,
		dots: false,
		autoplaySpeed: 2000,
		navSpeed: 2000,
		navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
		responsive:{
			0:{
				items:1
			},
			
			480:{
				items:2
			},			
			
			767:{
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
