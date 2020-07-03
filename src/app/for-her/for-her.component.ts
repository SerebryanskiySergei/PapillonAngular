import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
import * as $ from 'jquery';
import { OwlOptions } from 'ngx-owl-carousel-o/public_api';

@Component({
  selector: 'app-for-her',
  templateUrl: './for-her.component.html',
  styleUrls: ['./for-her.component.css']
})

export class ForHerComponent implements OnInit {

  constructor(private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
     /** spinner starts on init */
     this.spinner.show();
 
     setTimeout(() => {
       /** spinner ends after 5 seconds */
       this.spinner.hide();
     }, 1500);
     $.getScript('../../assets/js/custom.js');
  }
}
