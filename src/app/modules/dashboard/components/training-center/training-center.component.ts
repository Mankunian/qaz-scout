import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-training-center',
	templateUrl: './training-center.component.html',
	styleUrls: ['./training-center.component.scss']
})
export class TrainingCenterComponent implements OnInit {
	coachList: any;
	popularCoach: any;
	favoritesCoach: any;
	constructor() { }

	ngOnInit(): void {
		this.getAllCoachList();
		this.getPopularCoachList();
		this.getFavoritesCoachList();
	}

	getFavoritesCoachList() {
		this.favoritesCoach = [
			{ id: 1, fullName: 'Хосеп Гвардиола', experience: '20 лет', birthday: '18 января 1971', img: 'https://lifebeyondsportmedia.com/bestanden/Guardiola/PEP_GUARDIOLA_6.jpg' },
		]
	}
	getPopularCoachList() {
		this.popularCoach = [
			{ id: 1, fullName: 'Хосеп Гвардиола', experience: '20 лет', birthday: '18 января 1971', img: 'https://lifebeyondsportmedia.com/bestanden/Guardiola/PEP_GUARDIOLA_6.jpg' },
			{ id: 2, fullName: 'Юрген Клопп', experience: '20 лет', birthday: '06 июнь 1973', img: 'https://upload.wikimedia.org/wikipedia/commons/6/63/Liverpool_vs._Chelsea%2C_UEFA_Super_Cup_2019-08-14_04.jpg' },
		]
	}
	getAllCoachList() {
		this.coachList = [
			{ id: 1, fullName: 'Хосеп Гвардиола', experience: '20 лет', birthday: '18 января 1971', img: "https://lifebeyondsportmedia.com/bestanden/Guardiola/PEP_GUARDIOLA_6.jpg" },
			{ id: 2, fullName: 'Юрген Клопп', experience: '20 лет', birthday: '06 июнь 1973', img: 'https://upload.wikimedia.org/wikipedia/commons/6/63/Liverpool_vs._Chelsea%2C_UEFA_Super_Cup_2019-08-14_04.jpg' },
			{ id: 3, fullName: 'Жозе Моуринью', experience: '20 лет', birthday: '18 января 1971 г.', img: 'https://aif-s3.aif.ru/images/013/446/c8e768209afff1a0b13d146c65d244d1.jpg' },
			{ id: 4, fullName: 'Стивен Джеррард', experience: '20 лет', birthday: '18 января 1971 г.', img: 'https://imgresizer.eurosport.com/unsafe/1200x0/filters:format(jpeg):focal(1238x295:1240x293)/origin-imgresizer.eurosport.com/2021/11/11/3252342-66564108-2560-1440.jpg' },
		]
	}

}
