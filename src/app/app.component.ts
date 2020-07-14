import { Component, OnInit } from '@angular/core';
import { setTheme } from 'ngx-bootstrap/utils';
import { NgxSpinnerService } from "ngx-spinner";
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Депиляция в салоне Papillon - Шугаринг | Воск | Полимер';

  constructor(private spinner: NgxSpinnerService) {
    setTheme('bs3'); // or 'bs4'
  }

  ngOnInit() {
    /** spinner starts on init */
    this.spinner.show();
 
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 1500);
    $.getScript('../../assets/js/custom.js');
  }
}
