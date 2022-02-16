import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ClubService } from 'src/app/services/club.service';
import { LeagueService } from 'src/app/services/league.service';
import { NotificationService } from 'src/app/services/notification.service';
import { RegionService } from 'src/app/services/region.service';

@Component({
	selector: 'app-add-club',
	templateUrl: './add-club.component.html',
	styleUrls: ['./add-club.component.scss']
})
export class AddClubComponent implements OnInit {
	addClubForm!: FormGroup;
	regionList: any;
	leaguesList: any;
	constructor(
		public dialogRef: MatDialogRef<AddClubComponent>,
		private regionService: RegionService,
		private leagueService: LeagueService,
		private clubService: ClubService,
		private notification: NotificationService
	) {
		this.addClubForm = new FormGroup({
			"name": new FormControl("", Validators.required),
			"logo": new FormControl(""),
			"region": new FormControl(null),
			"league": new FormControl(null),
			"address": new FormControl(""),
			"instagram": new FormControl(""),
			"website": new FormControl(""),
		})
	}


	ngOnInit(): void {
		this.getRegions();
		this.getLeagues();
	}
	getLeagues() {
		this.leagueService.getLeagues().subscribe(response => {
			this.leaguesList = response;
		})
	}

	getRegions() {
		this.regionService.getRegions().subscribe(response => {
			this.regionList = response;
		})
	}

	addClub(): void {
		console.log(this.addClubForm.value)
		this.clubService.createClub(this.addClubForm.value).subscribe(response => {
			console.log(response);
			this.dialogRef.close();
			this.notification.showSnackBar('Клуб успешно добавлен');
		})
	}
}
