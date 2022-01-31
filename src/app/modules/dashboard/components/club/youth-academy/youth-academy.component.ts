import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-youth-academy',
	templateUrl: './youth-academy.component.html',
	styleUrls: ['./youth-academy.component.scss']
})
export class YouthAcademyComponent implements OnInit {
	youth: any;

	constructor() { }

	ngOnInit(): void {
		this.youth = [
			{ id: 1, name: 'Phil Foden', img: '1.jpg', position: 'striker', age: '22', social_links: [] },
			{ id: 2, name: 'Erling Haaland', img: '2.jpg', position: 'striker', age: '21', social_links: [] },
			{ id: 3, name: 'Mason Mount', img: '3.jpg', position: 'striker', age: '21', social_links: [] },
		];
	}

}
