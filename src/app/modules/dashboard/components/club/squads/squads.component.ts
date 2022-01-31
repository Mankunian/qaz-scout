import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-squads',
	templateUrl: './squads.component.html',
	styleUrls: ['./squads.component.scss']
})
export class SquadsComponent implements OnInit {
	strikers: any
	defenders: any
	allPlayers: any;
	constructor() { }

	ngOnInit(): void {
		this.allPlayers = [
			{ id: 1, name: 'Cristiano Ronaldo', img: '1.jpg', position: 'striker', social_links: [] },
			{ id: 2, name: 'Raul Jimenez', img: '2.jpg', position: 'striker', social_links: [] },
			{ id: 3, name: 'Mohamed Salah', img: '3.jpg', position: 'striker', social_links: [] },
			{ id: 4, name: 'Sergio Ramos', img: '9.jpg', position: 'defender', social_links: [] },
			{ id: 5, name: 'Raphael Varane', img: '5.jpg', position: 'defender', social_links: [] },
			{ id: 6, name: 'Virgil Van Dijk', img: '6.jpg', position: 'defender', social_links: [] }
		];
		this.strikers = [
			{ id: 1, name: 'Cristiano Ronaldo', img: '1.jpg', position: 'striker', social_links: [] },
			{ id: 2, name: 'Raul Jimenez', img: '2.jpg', position: 'striker', social_links: [] },
			{ id: 3, name: 'Mohamed Salah', img: '3.jpg', position: 'striker', social_links: [] },
		];
		this.defenders = [
			{ id: 1, name: 'Sergio Ramos', img: '9.jpg', position: 'defender', social_links: [] },
			{ id: 2, name: 'Raphael Varane', img: '5.jpg', position: 'defender', social_links: [] },
			{ id: 3, name: 'Virgil Van Dijk', img: '6.jpg', position: 'defender', social_links: [] },
		]
	}

}
