import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
	MatSnackBar,
	MatSnackBarHorizontalPosition,
	MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { AddUserComponent } from '../../dialogs/add-user/add-user.component';

export interface PeriodicElement {
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

const ELEMENT_DATA: PeriodicElement[] = [
	{ position: 1, club: 'Discovery coffee', region: 'Нур-султан', league: 'Лига 2', firstName: 'Азамат', lastName: 'Оразов', action: '', email: 'orazov@mail.io', phone: '8701 766 22 11' },
	{ position: 2, club: 'Shaurma food', region: 'Нур-султан', league: 'Лига 1', firstName: 'Еркин', lastName: 'Мусин', action: '', email: 'musin@mail.io', phone: '8702 271 62 71' },
	{ position: 3, club: 'Coffee boom', region: 'Нур-султан', league: 'Лига 4', firstName: 'Даулет', lastName: 'Жаксылык', action: '', email: 'zhax@mail.io', phone: '8701 766 22 11' },
];

@Component({
	selector: 'app-email',
	templateUrl: './email.component.html',
	styleUrls: ['./email.component.scss']
})
export class EmailComponent implements OnInit {
	horizontalPosition: MatSnackBarHorizontalPosition = 'center';
	verticalPosition: MatSnackBarVerticalPosition = 'bottom';
	displayedColumns: string[] = ['position', 'club', 'region', 'league', 'firstName', 'lastName', 'email', 'phone', 'action'];
	dataSource = ELEMENT_DATA;

	constructor(private _snackBar: MatSnackBar, public dialog: MatDialog) { }


	ngOnInit(): void {
	}

	accept(element: any) {
		const dialogRef = this.dialog.open(AddUserComponent, {
			data: element
		});
		dialogRef.afterClosed().subscribe(result => {
			console.log(`Dialog result: ${result}`);
		});

	}

	decline(element: any) {
		console.log(element)
		this._snackBar.open('Отказано в заявке', element.club, {
			horizontalPosition: this.horizontalPosition,
			verticalPosition: this.verticalPosition,
			duration: 3000
		});
	}

}
