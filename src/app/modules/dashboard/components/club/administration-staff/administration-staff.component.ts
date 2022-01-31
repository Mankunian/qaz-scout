import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-administration-staff',
	templateUrl: './administration-staff.component.html',
	styleUrls: ['./administration-staff.component.scss']
})
export class AdministrationStaffComponent implements OnInit {
	admins: any;
	constructor() { }

	ngOnInit(): void {
		this.admins = [
			{ id: 1, name: 'Roman Abramovic', img: '1.jpg', position: 'Президент' },
			{ id: 2, name: 'Alex Ferguson', img: '2.jpg', position: 'Генеральный директор', social_links: [] },
			{ id: 3, name: 'Mohamed Salman', img: '3.jpg', position: 'Финансовый директор', social_links: [] },
		];
	}

}
