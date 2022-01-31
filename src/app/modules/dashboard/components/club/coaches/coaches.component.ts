import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-coaches',
	templateUrl: './coaches.component.html',
	styleUrls: ['./coaches.component.scss']
})
export class CoachesComponent implements OnInit {
	coaches: any;
	constructor() { }

	ngOnInit(): void {
		this.coaches = [
			{ id: 1, name: 'Ricardo Kaka', img: '1.jpg', position: 'head', age: '47', social_links: [] },
			{ id: 2, name: 'Jose Mournho', img: '2.jpg', position: 'assistant', age: '53', social_links: [] },
		];
	}

}
