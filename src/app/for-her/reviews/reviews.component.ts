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
		job: new Date(),
		text: ''
	}

	reviews = [
		{
		  name: "Даша",
		  job: new Date("12.04.2019"),
		  text: `Хожу в этот салон на шугаринг с сентября. Очень нравится то, как быстро проводится процедура и за разговором с мастером не замечаешь дискомфорта)
Удивилась большому количеству ухаживающих средств. Видно, что мастер с удовольствием выполняет свою работу.
У меня довольно чувствительная кожа, но раздражение проходит уже через пять минут!!!
Спасибо мастеру Лизе :)`
		},
		{
			name: "Алина",
			job: new Date("05.21.2020"),
			text: `Давно хожу к этому мастеру. В уютной обстановке не замечаешь течения времени.
Сама из сферы красоты, поэтому знаю как тяжело найти своего мастера. Рада что мне это удалось!`

		},
		{
			name: "Настя",
			job: new Date("06.19.2020"),
			text: "Спасибо мастеру за умение, салону за низкие цены"
		},
		{
		  name: "Женя",
		  job: new Date("06.10.2020"),
		  text: `В этом салоне работает супер мастер!
У меня после многократных попыток найти мастера с лёгкой рукой, совсем пропало желание делать депиляцию.
Спасибо дочке, уговорила меня отказаться от бритвы и прийти к Лизе.
Она в начале расспросила о том, насколько чувствительна моя кожа и описала несколько способов депиляции, предоставив мне выбор.
После нескольких сеансов у меня практически полностью прошло врастание!
Очень довольна! Рекомендую всем зайти в Papillon!`
		},
		{
		  name: "Сергей",
		  job: new Date("02.07.2020"),
		  text: `Было очень стремно идти, но моя девушка взяла с меня слово, что я схожу на депиляцию подмышек. Поспрашивал знакомых, услышал много позитивных откликов про мастера из Papillon.
В итоге ни разу не пожалел что пришел! Очень круто все сделано, сама процедура прошла достаточно легко!
Очень приятный мастер, видя что я немного стесняюсь, повела себя очень профессионально!

Через месяц похоже пойду еще :D`
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

  ngOnInit(): void {
	this.reviews = this.reviews.sort((t1, t2) => {
		const date1 = t1.job;
		const date2 = t2.job;
		if (date1 > date2) { return 1; }
		if (date1 < date2) { return -1; }
		return 0;
	});
   }

  addReview() {
	// Process checkout data here
	if (this.newReview.name !== '' && this.newReview.text !== '') {
		this.reviews.unshift(this.newReview);
	}
    console.warn('Your order has been submitted', this.newReview);
  }

}
