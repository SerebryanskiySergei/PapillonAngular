import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { FormsModule }   from '@angular/forms';



@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

	newReview = {
		name: '',
		job: '',
		text: ''
	}

	reviews = [
		{
		  name: "Даша",
		  job: "Студентка",
		  text: `Хожу в этот салон на шугаринг с сентября. Очень нравится то, как быстро проводится процедура и за разговором с мастером не замечаешь дискомфорта<br>
		  Удивилась большому количеству ухаживающих средств. Видно, что мастер с удовольствием выполняет свою работу.<br>У меня довольно чувствительная кожа, но раздражение проходит уже через пять минут!!!<br>
		  Спасибо мастеру Лизе`
		},
		{
		  name: "Женя",
		  job: "Модель",
		  text: `В этом салоне работает супер мастер!<br>
		  У меня после многократных попыток найти мастера с лёгкой рукой, совсем пропало желание делать депиляцию.
		  Спасибо дочке, уговорила меня отказаться от бритвы и прийти к Лизе.<br>
		  Она в начале расспросила о том, насколько чувствительна моя кожа и описала несколько способов депиляции, предоставив мне выбор.
		  После нескольких сеансов у меня практически полностью прошло врастание!<br>
		  Очень довольна! Рекомендую всем салон Papillon!`
		},
		{
		  name: "Сергей",
		  job: "Фотограф",
		  text: `Было очень стремно идти. Моя девушка взяла с меня слово, что я схожу на депиляцию подмышек. Поспрашивал знакомых, услышал много позитивных откликов про мастера из Papillon.<br>
		  В итоге ни разу не пожалел что пришел! Очень круто все сделано, сама процедура прошла достаточно легко! <br>
		  Очень приятный мастер, видя что я немного стесняюсь, повела себя очень профессионально! <br>
		  Через месяц пойду еще`
		}
	];

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

  constructor() { 

  }

  ngOnInit(): void { }

  addReview() {
	// Process checkout data here
	if (this.newReview.name !== '' && this.newReview.job !== '' && this.newReview.text !== '') {
		this.reviews.unshift(this.newReview);
	}
    console.warn('Your order has been submitted', this.newReview);
  }

}
