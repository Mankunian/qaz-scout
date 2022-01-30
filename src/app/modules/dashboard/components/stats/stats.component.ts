import { Component, OnInit } from '@angular/core';
import { StatsService } from 'src/app/services/stats.service';

@Component({
	selector: 'app-stats',
	templateUrl: './stats.component.html',
	styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {
	statsList: any;

	constructor(
		private statService: StatsService) { }

	ngOnInit(): void {
		this.getStats();
		// define role function, if role is admin, call stats by admin. Ex. /api/stats/admin
	}

	getStats() {
		this.statService.getStats().subscribe((response: any) => {
			console.log(response);
			this.statsList = response;
		})
	}

}
