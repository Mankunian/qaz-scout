import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-fixtures',
	templateUrl: './fixtures.component.html',
	styleUrls: ['./fixtures.component.scss']
})
export class FixturesComponent implements OnInit {
	fixtures: any;
	constructor() { }

	ngOnInit(): void {
		this.fixtures = [
			{
				id: 1,
				date: "21.00, 11 Февраля, 2022",
				type: "Кубок АФЛ",
				home: {
					logo: "assets/img/custom/clubs/kairat2.png",
					name: "Кайрат"
				},
				away: {
					logo: "assets/img/custom/clubs/astana.png",
					name: "Астана"
				}
			},
			{
				id: 2,
				date: "22.00, 20 Февраля, 2022",
				type: "Кубок АФЛ",
				home: {
					logo: "assets/img/custom/clubs/brentford.png",
					name: "Брентфорд"
				},
				away: {
					logo: "assets/img/custom/clubs/lfc.png",
					name: "Ливерпуль"
				}
			},
			{
				id: 3,
				date: "22.00, 20 Февраля, 2022",
				type: "Кубок АФЛ",
				home: {
					logo: "assets/img/custom/clubs/loko.png",
					name: "Брентфорд"
				},
				away: {
					logo: "assets/img/custom/clubs/fiorentina.png",
					name: "Ливерпуль"
				}
			}
		]
	}

}
