import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
	selector: 'app-edit-news',
	templateUrl: './edit-news.component.html',
	styleUrls: ['./edit-news.component.scss']
})
export class EditNewsComponent implements OnInit {

	constructor(
		public dialogRef: MatDialogRef<EditNewsComponent>,
		@Inject(MAT_DIALOG_DATA) public data: any
	) { }

	ngOnInit(): void {
		console.log(this.data)
	}

}
