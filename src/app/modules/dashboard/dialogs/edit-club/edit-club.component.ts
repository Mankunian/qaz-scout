import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ClubService } from 'src/app/services/club.service';
import { LeagueService } from 'src/app/services/league.service';
import { NotificationService } from 'src/app/services/notification.service';
import { RegionService } from 'src/app/services/region.service';

@Component({
	selector: 'app-edit-club',
	templateUrl: './edit-club.component.html',
	styleUrls: ['./edit-club.component.scss']
})
export class EditClubComponent implements OnInit {
	leaguesList: any;
	regionList: any;
	public updateClubForm!: FormGroup;
	constructor(
		private leagueService: LeagueService,
		private regionService: RegionService,
		private clubService: ClubService,
		public dialogRef: MatDialogRef<EditClubComponent>,
		@Inject(MAT_DIALOG_DATA) public data: any,
		private notification: NotificationService
	) { }

	ngOnInit(): void {
		this.updateClubForm = new FormGroup({
			"id": new FormControl(this.data.id),
			"name": new FormControl(this.data.name, Validators.required),
			"logo": new FormControl(this.data.logo),
			"region": new FormControl(this.data.region),
			"league": new FormControl(this.data.league),
			"address": new FormControl(this.data.address),
			"instagram": new FormControl(this.data.instagram),
			"website": new FormControl(this.data.website),
		})
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

	updateClub() {
		let club = this.updateClubForm.value;
		this.clubService.updateClub(club).subscribe((response: any) => {
			console.log(response);
			this.dialogRef.close();
			this.notification.showSnackBar('Клуб успешно изменен');
		})
	}

	public objectComparisonFunction = function (option: any, value: any): boolean {
		console.log(option, value)
		return option.id === value.id;
	}

}
