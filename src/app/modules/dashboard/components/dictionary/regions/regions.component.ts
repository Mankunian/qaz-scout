import { Component, OnInit } from '@angular/core';
import { RegionService } from 'src/app/services/region.service';

@Component({
	selector: 'app-regions',
	templateUrl: './regions.component.html',
	styleUrls: ['./regions.component.scss']
})
export class RegionsComponent implements OnInit {
	regionsList: any;

	constructor(private regionService: RegionService) { }

	ngOnInit(): void {
		this.getRegions();
	}

	getRegions() {
		this.regionService.getRegions().subscribe(response => {
			console.log(response);
			this.regionsList = response;
		})
	}

}
