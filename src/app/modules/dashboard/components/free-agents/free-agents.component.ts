import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
	selector: 'app-free-agents',
	templateUrl: './free-agents.component.html',
	styleUrls: ['./free-agents.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class FreeAgentsComponent implements OnInit {

	positions: any;
	ageRange: any;
	leagues: any;
	freeAgents: any;


	constructor(
		private router: Router,
		private notificationService: NotificationService
	) { }

	ngOnInit(): void {
		this.positions = [
			{ id: 1, code: 'striker', name: 'Нападающий' },
			{ id: 2, code: 'midfielder', name: 'Полузащитник' },
			{ id: 3, code: 'defender', name: 'Защитник' },
			{ id: 4, code: 'universal', name: 'Универсал' },
			{ id: 5, code: 'goalkeeper', name: 'Вратарь' }
		];
		this.ageRange = [
			{ id: 1, range: '10-15' },
			{ id: 2, range: '15-27' },
			{ id: 3, range: '27-40' },
			{ id: 4, range: '40+' }
		];
		this.leagues = [
			{ id: 1, name: 'Лига 1' },
			{ id: 2, name: 'Лига 2' },
			{ id: 3, name: 'Лига 3' },
		];

		this.freeAgents = [
			{ id: 1, name: 'Cristiano Ronaldo', img: '1.jpg', position: 'Нападающий', age: 36, club: 'Манчестер Юнайтед', birthCountry: 'Португалия', league: 'Premier league', status: 0 },
			{ id: 2, name: 'Yerlan Uteulin', img: '8.jpg', position: 'Защитник', age: 30, club: 'Без клуба', birthCountry: 'Казахстан', league: '-', status: 0 },
			{ id: 3, name: 'Mohamed Salah', img: '3.jpg', position: 'Нападающий', age: 30, club: ' Ливерпуль', birthCountry: 'Египет', league: 'Premier league', status: 0 },
			{ id: 4, name: 'Alisher Kelgenbay', img: '7.png', position: 'Нападающий', age: 26, club: ' Shaurma food', birthCountry: 'Казахстан', league: 'Лига 1', status: 0 },
		]
	}

	saveSessionStorage(item: any): void {
		sessionStorage.setItem('userDetails', JSON.stringify(item));
	}

	invite(element: any) {
		element.status = 1;
		this.notificationService.showSnackBar('Заявка успешно отправлена')
	}


	reject(element: any) {
		element.status = 0;
		this.notificationService.showSnackBar('Приглашение отозвано')
	}


}
