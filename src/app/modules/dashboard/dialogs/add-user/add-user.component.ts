import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
	position: number;
	club: any;
	region: any;
	league: any;
	firstName: string;
	lastName: string;
	action: string;
	email: string;
	phone: string;
}

@Component({
	selector: 'app-add-user',
	templateUrl: './add-user.component.html',
	styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

	constructor(
		public dialogRef: MatDialogRef<AddUserComponent>,
		@Inject(MAT_DIALOG_DATA) public data: DialogData
	) { }

	ngOnInit(): void {
		console.log(this.data)
	}

	onNoClick(): void {
		this.dialogRef.close();
	}

}
