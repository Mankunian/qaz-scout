import { Component, OnInit } from '@angular/core';
import { StatsService } from 'src/app/services/stats.service';

@Component({
	selector: 'app-stats',
	templateUrl: './stats.component.html',
	styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {

	constructor(private statService: StatsService) { }

	ngOnInit(): void {
		// define role function, if role is admin, call stats by admin. Ex. /api/stats/admin
	}

}
