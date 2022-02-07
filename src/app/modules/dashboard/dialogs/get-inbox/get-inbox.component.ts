import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Component({
	selector: 'app-get-inbox',
	templateUrl: './get-inbox.component.html',
	styleUrls: ['./get-inbox.component.scss']
})
export class GetInboxComponent implements OnInit {
	horizontalPosition: MatSnackBarHorizontalPosition = 'center';
	verticalPosition: MatSnackBarVerticalPosition = 'bottom';
	constructor(
		public dialogRef: MatDialogRef<GetInboxComponent>,
		private _snackBar: MatSnackBar,
		@Inject(MAT_DIALOG_DATA) public data: any,
	) { }

	ngOnInit(): void {
		console.log(this.data)
	}

	accept(element: any): void {
		this.dialogRef.close();
		this._snackBar.open('Принята заявка от', element.club.name, {
			horizontalPosition: this.horizontalPosition,
			verticalPosition: this.verticalPosition,
			duration: 3000
		});
	}

}
