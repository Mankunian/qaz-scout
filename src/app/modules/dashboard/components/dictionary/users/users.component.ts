import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NotificationService } from 'src/app/services/notification.service';
import { UserService } from 'src/app/services/user.service';
import { EditUserComponent } from '../../../dialogs/edit-user/edit-user.component';

@Component({
	selector: 'app-users',
	templateUrl: './users.component.html',
	styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
	userList: any;

	constructor(
		private userService: UserService,
		public dialog: MatDialog,
		private notification: NotificationService
	) { }

	ngOnInit(): void {
		this.getUsers();
	}

	getUsers() {
		this.userService.getUsers().subscribe(response => {
			console.log(response);
			this.userList = response;
		})
	}

	deleteUser(user: any) {
		console.log(user)
		let userId = user.id;
		this.userService.deleteUser(userId).subscribe(response => {
			console.log(response);
			this.notification.showSnackBar('Пользователь успешно удален');
			// this.getUsers();
		})
	}

	editUserDialog(user: any) {
		let shareData = user;
		const dialogRef = this.dialog.open(EditUserComponent, {
			width: '600px',
			data: shareData
		});
		dialogRef.afterClosed().subscribe(result => {
			this.getUsers();
		});
	}

}
