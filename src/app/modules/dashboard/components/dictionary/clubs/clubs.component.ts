import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ClubService } from 'src/app/services/club.service';
import { AddClubComponent } from '../../../dialogs/add-club/add-club.component';
import { EditClubComponent } from '../../../dialogs/edit-club/edit-club.component';

@Component({
	selector: 'app-clubs',
	templateUrl: './clubs.component.html',
	styleUrls: ['./clubs.component.scss']
})
export class ClubsComponent implements OnInit {
	clubList: any;

	constructor(
		public dialog: MatDialog,
		private clubService: ClubService
	) { }

	ngOnInit(): void {
		this.getClubs();
	}

	getClubs() {
		this.clubService.getClubs().subscribe((response: any) => {
			console.log(response)
			this.clubList = response;
		})
	}

	createClubDialog(): void {
		const dialogRef = this.dialog.open(AddClubComponent, {
			width: '600px',
		});
		dialogRef.afterClosed().subscribe(result => {
			this.getClubs();
		});
	}

	deleteClub(club: any) {
		let clubId = club.id;
		this.clubService.deleteClub(clubId).subscribe(response => {
			console.log(response)
			this.getClubs();
		})
	}

	openEditClubDialog(club: any) {
		const dialogRef = this.dialog.open(EditClubComponent, {
			width: '600px',
			data: club
		});
		dialogRef.afterClosed().subscribe(result => {
			this.getClubs();
		});
	}

}
