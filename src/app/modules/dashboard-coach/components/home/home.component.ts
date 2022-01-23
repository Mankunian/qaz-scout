import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {
	position: number;
	name: string;
	played: number;
	won: number;
	drawn: number;
	lost: number;
	gd: string;
	pts: number
}

const ELEMENT_DATA: PeriodicElement[] = [
	{ position: 1, name: 'Juventus', played: 8, won: 6, drawn: 1, lost: 1, gd: '13:5', pts: 19 },
	{ position: 2, name: 'Inter Milan', played: 8, won: 6, drawn: 1, lost: 1, gd: '13:5', pts: 19 },
	{ position: 3, name: 'Atalanta', played: 8, won: 6, drawn: 1, lost: 1, gd: '13:5', pts: 19 },
	{ position: 4, name: 'Lazio', played: 8, won: 6, drawn: 1, lost: 1, gd: '13:5', pts: 19 },
	{ position: 4, name: 'Napoli', played: 8, won: 6, drawn: 1, lost: 1, gd: '13:5', pts: 19 },
	{ position: 4, name: 'Milan', played: 8, won: 6, drawn: 1, lost: 1, gd: '13:5', pts: 19 },
	{ position: 4, name: 'Kairat', played: 8, won: 6, drawn: 1, lost: 1, gd: '13:5', pts: 19 },
	{ position: 4, name: 'Astana', played: 8, won: 6, drawn: 1, lost: 1, gd: '13:5', pts: 19 },
	{ position: 4, name: 'Sampadoria', played: 8, won: 6, drawn: 1, lost: 1, gd: '13:5', pts: 19 },
	{ position: 4, name: 'Venecce', played: 8, won: 6, drawn: 1, lost: 1, gd: '13:5', pts: 19 },
	{ position: 4, name: 'Roma', played: 8, won: 6, drawn: 1, lost: 1, gd: '13:5', pts: 19 },
	{ position: 4, name: 'Manchester city', played: 8, won: 6, drawn: 1, lost: 1, gd: '13:5', pts: 19 },
	{ position: 4, name: 'Arsenal', played: 8, won: 6, drawn: 1, lost: 1, gd: '13:5', pts: 19 },
	{ position: 4, name: 'Chelsea', played: 8, won: 6, drawn: 1, lost: 1, gd: '13:5', pts: 19 },
	{ position: 4, name: 'Burnley', played: 8, won: 6, drawn: 1, lost: 1, gd: '13:5', pts: 19 },
	{ position: 4, name: 'Brighton', played: 8, won: 6, drawn: 1, lost: 1, gd: '13:5', pts: 19 },
	{ position: 4, name: 'Brentford', played: 8, won: 6, drawn: 1, lost: 1, gd: '13:5', pts: 19 },
	{ position: 4, name: 'Newcastle United', played: 8, won: 6, drawn: 1, lost: 1, gd: '13:5', pts: 19 },
	{ position: 4, name: 'Liverpool', played: 8, won: 6, drawn: 1, lost: 1, gd: '13:5', pts: 19 },
	{ position: 4, name: 'Barcelona', played: 8, won: 6, drawn: 1, lost: 1, gd: '13:5', pts: 19 },
];
@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
	displayedColumns: string[] = ['position', 'name', 'played', 'won', 'drawn', 'lost', 'gd', 'pts'];
	dataSource = ELEMENT_DATA;
	constructor() { }

	ngOnInit(): void {
	}

}
