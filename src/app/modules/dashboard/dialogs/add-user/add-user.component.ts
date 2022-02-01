import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Component({
	selector: 'app-add-user',
	templateUrl: './add-user.component.html',
	styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
	horizontalPosition: MatSnackBarHorizontalPosition = 'center';
	verticalPosition: MatSnackBarVerticalPosition = 'bottom';
	constructor(
		public dialogRef: MatDialogRef<AddUserComponent>,
		@Inject(MAT_DIALOG_DATA) public data: any,
		private _snackBar: MatSnackBar
	) { }

	ngOnInit(): void {
		console.log(this.data)
	}

	onNoClick(): void {
		this.dialogRef.close();
	}

	addUser(element: any) {
		this._snackBar.open('Добавлен пользователь', element.firstName + ' ' + element.lastName, {
			horizontalPosition: this.horizontalPosition,
			verticalPosition: this.verticalPosition,
			duration: 3000
		});

		this.onNoClick()
	}

	rejectApp(element: any) {
		this._snackBar.open('Заявка отклонена', element.firstName + ' ' + element.lastName, {
			horizontalPosition: this.horizontalPosition,
			verticalPosition: this.verticalPosition,
			duration: 3000
		});
		this.onNoClick();
	}

}
