import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
	MatSnackBar,
	MatSnackBarHorizontalPosition,
	MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { ApplicationService } from 'src/app/services/application.service';
import { IncomingAppsService } from 'src/app/services/incoming-apps.service';
import { RoleService } from 'src/app/services/role.service';
import { AddUserComponent } from '../../dialogs/add-user/add-user.component';
import { GetInboxComponent } from '../../dialogs/get-inbox/get-inbox.component';



@Component({
	selector: 'app-email',
	templateUrl: './email.component.html',
	styleUrls: ['./email.component.scss']
})
export class EmailComponent implements OnInit {
	horizontalPosition: MatSnackBarHorizontalPosition = 'center';
	verticalPosition: MatSnackBarVerticalPosition = 'bottom';
	displayedColumns: string[] = ['position', 'club', 'region', 'league', 'firstName', 'lastName', 'email', 'phone', 'action'];
	dataSource: any;
	users: any;
	displayAsCard: boolean = false;
	constructor(
		private _snackBar: MatSnackBar,
		public dialog: MatDialog,
		private appService: ApplicationService,
		private roleService: RoleService
	) { }


	ngOnInit(): void {
		this.getApps();
	}

	getApps() {
		this.appService.getApplicationsById().then(data => {
			this.dataSource = data;
		})
	}

	accept(element: any): any {
		if (this.roleService.getRoleOfCurrentUser() == 'admin') {
			const dialogRef = this.dialog.open(AddUserComponent, {
				data: element,
				width: '500px'
			});
			dialogRef.afterClosed().subscribe(result => {
				console.log(`Dialog result: ${result}`);
			});
		} else if (this.roleService.getRoleOfCurrentUser() == 'player') {
			const dialogRef = this.dialog.open(GetInboxComponent, {
				data: element,
				width: '500px'
			});
			dialogRef.afterClosed().subscribe(result => {
				console.log(`Dialog result: ${result}`);
			});
		} else {
			return ''
		}


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
