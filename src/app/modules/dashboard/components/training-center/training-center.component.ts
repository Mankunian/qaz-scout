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
			{ id: 1, fullName: 'Хосеп Гвардиола', experience: '20 лет', birthday: '18 января 1971', img: 'pep.jpg' },
		]
	}
	getPopularCoachList() {
		this.popularCoach = [
			{ id: 1, fullName: 'Хосеп Гвардиола', experience: '20 лет', birthday: '18 января 1971', img: 'pep.jpg' },
			{ id: 2, fullName: 'Юрген Клопп', experience: '20 лет', birthday: '06 июнь 1973', img: 'klopp.jpg' },
		]
	}
	getAllCoachList() {
		this.coachList = [
			{ id: 1, fullName: 'Хосеп Гвардиола', experience: '20 лет', birthday: '18 января 1971', img: "pep.jpg" },
			{ id: 2, fullName: 'Юрген Клопп', experience: '20 лет', birthday: '06 июнь 1973', img: 'klopp.jpg' },
			{ id: 3, fullName: 'Жозе Моуринью', experience: '20 лет', birthday: '18 января 1971 г.', img: 'mour.jpg' },
			{ id: 4, fullName: 'Стивен Джеррард', experience: '20 лет', birthday: '18 января 1971 г.', img: 'gerrard.jpg' },
		]
	}

}
