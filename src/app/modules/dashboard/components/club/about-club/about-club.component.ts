import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClubService } from 'src/app/services/club.service';
@Component({
	selector: 'app-about-club',
	templateUrl: './about-club.component.html',
	styleUrls: ['./about-club.component.scss']
})
export class AboutClubComponent implements OnInit {
	clubInfo: any;

	constructor(
		private route: ActivatedRoute,
		private clubService: ClubService
	) { }

	ngOnInit(): void {
		// console.log(this.route.snapshot.paramMap.get('id'));
		let clubId = this.route.snapshot.paramMap.get('id');
		this.getClubInfoById(clubId);
	}

	getClubInfoById(clubId: any) {
		this.clubService.getClubById(clubId).subscribe(response => {
			console.log(response);
			this.clubInfo = response;
		})
	}

}
