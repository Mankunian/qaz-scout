import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-free-agent-details',
	templateUrl: './free-agent-details.component.html',
	styleUrls: ['./free-agent-details.component.scss']
})
export class FreeAgentDetailsComponent implements OnInit {
	userDetails: any;

	constructor() { }

	ngOnInit(): void {
		let userDetails = JSON.parse(sessionStorage.userDetails)
		if (userDetails) {
			this.userDetails = userDetails;
		}
	}

}
