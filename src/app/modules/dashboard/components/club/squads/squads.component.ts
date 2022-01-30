import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-squads',
	templateUrl: './squads.component.html',
	styleUrls: ['./squads.component.scss']
})
export class SquadsComponent implements OnInit {
	strikers: any
	defenders: any

	constructor() { }

	ngOnInit(): void {
		this.strikers = [
			{ id: 1, name: 'Cristiano Ronaldo', img: '1.jpg', position: 'Нападающий', social_links: [] },
			{ id: 2, name: 'Raul Jimenez', img: '2.jpg', position: 'Нападающий', social_links: [] },
			{ id: 3, name: 'Mohamed Salah', img: '3.jpg', position: 'Нападающий', social_links: [] },
		];
		this.defenders = [
			{ id: 1, name: 'Sergio Ramos', img: '4.jpg', position: 'Защитник', social_links: [] },
			{ id: 2, name: 'Raphael Varane', img: '5.jpg', position: 'Защитник', social_links: [] },
			{ id: 3, name: 'Virgil Van Dijk', img: '6.jpg', position: 'Защитник', social_links: [] },
		]
	}

}
