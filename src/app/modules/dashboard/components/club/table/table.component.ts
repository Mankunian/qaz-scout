import { Component, OnInit } from '@angular/core';

export interface TableElement {
	position: number;
	name: string;
	played: number;
	won: number;
	drawn: number;
	lost: number;
	gd: string;
	pts: number
}
const TABLE_ELEMENT: TableElement[] = [
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

const SCORER_ELEMENT: any = [
	{ position: 1, name: 'Cristiano Ronaldo', played: 14, scored: 12 },
	{ position: 2, name: 'Mohamed Salah', played: 14, scored: 11 },
	{ position: 3, name: 'Harry Kane', played: 14, scored: 10 },
	{ position: 4, name: 'Raheem Sterling', played: 14, scored: 9 },
	{ position: 5, name: 'Gabriel Jesus', played: 14, scored: 9 },
	{ position: 5, name: 'Gabriel Jesus', played: 14, scored: 9 },
	{ position: 5, name: 'Gabriel Jesus', played: 14, scored: 9 },
	{ position: 5, name: 'Gabriel Jesus', played: 14, scored: 9 },
	{ position: 5, name: 'Gabriel Jesus', played: 14, scored: 9 },
	{ position: 5, name: 'Gabriel Jesus', played: 14, scored: 9 },
	{ position: 5, name: 'Gabriel Jesus', played: 14, scored: 9 },
	{ position: 5, name: 'Gabriel Jesus', played: 14, scored: 9 },
]
@Component({
	selector: 'app-table',
	templateUrl: './table.component.html',
	styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
	displayedColumns: string[] = ['position', 'name', 'played', 'won', 'drawn', 'lost', 'gd', 'pts'];
	dataSource = TABLE_ELEMENT;

	/* Бомбардиры */
	scorerTableColumns: string[] = ['name', 'played', 'scored'];
	scorerSource = SCORER_ELEMENT;
	/* Бомбардиры */
	constructor() { }

	ngOnInit(): void {
	}

}
