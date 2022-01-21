import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-free-agents',
	templateUrl: './free-agents.component.html',
	styleUrls: ['./free-agents.component.scss']
})
export class FreeAgentsComponent implements OnInit {
	positions: any;
	ageRange: any;
	level: any;
	freeAgents: any;
	constructor(private router: Router) { }

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
		this.level = [
			{ id: 1, name: 'Новичок' },
			{ id: 2, name: 'Любитель' },
			{ id: 3, name: 'Профессионал' },
		];
		this.freeAgents = [
			{ id: 1, name: 'Cristiano Ronaldo', img: '1.jpg', position: 'Нападающий', social_links: [], description: 'Криштиа́ну Рона́лду душ Са́нтуш Аве́йру — португальский футболист, выступающий за английский клуб «Манчестер Юнайтед» и сборную Португалии, в которой является капитаном.', age: 36, club: 'Манчестер Юнайтед', birthCountry: 'Португалия' },
			{ id: 2, name: 'Raul Jimenez', img: '2.jpg', position: 'Нападающий', social_links: [], description: 'Рау́ль Ало́нсо Химе́нес Родри́гес — мексиканский футболист. Нападающий клуба «Вулверхэмптон Уондерерс» и сборной Мексики. Олимпийский чемпион 2012 года. Участник чемпионатов мира 2014 и 2018 годов', age: 30, club: ' Вулверхэмптон Уондерерс', birthCountry: 'Мексика' },
			{ id: 3, name: 'Mohamed Salah', img: '3.jpg', position: 'Нападающий', social_links: [] },
		]
	}

	saveSessionStorage(item: any): void {
		sessionStorage.setItem('userDetails', JSON.stringify(item));
	}

}
