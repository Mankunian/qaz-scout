import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ClubService } from 'src/app/services/club.service';
import { NotificationService } from 'src/app/services/notification.service';
import { PositionService } from 'src/app/services/position.service';
import { RegionService } from 'src/app/services/region.service';
import { RoleService } from 'src/app/services/role.service';
import { UserService } from 'src/app/services/user.service';

@Component({
	selector: 'app-add-user',
	templateUrl: './add-user.component.html',
	styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
	clubList: any;
	regionList: any;
	createUserForm!: FormGroup;
	rolesList: any;
	positionList: any;
	constructor(
		public dialogRef: MatDialogRef<AddUserComponent>,
		private userService: UserService,
		private clubService: ClubService,
		private regionService: RegionService,
		private roleService: RoleService,
		private notification: NotificationService,
		private positionService: PositionService
	) { }

	ngOnInit(): void {
		this.getClubs();
		this.getRegions();
		this.getRoles();
		this.getPositions();
		this.getFormGroup();
	}

	getPositions() {
		this.positionService.getPositions().subscribe(response => {
			console.log(response)
			this.positionList = response;
		})
	}

	getFormGroup() {
		this.createUserForm = new FormGroup({
			"firstname": new FormControl(null, Validators.required),
			"lastname": new FormControl(null, Validators.required),
			"region": new FormControl(null),
			"email": new FormControl(null, Validators.required),
			"password": new FormControl(null),
			"phone": new FormControl(null),
			"address": new FormControl(null),
			"img": new FormControl(null),
			"instagram": new FormControl(null),
			"about": new FormControl(null),
			"role": new FormControl(null),
			"club": new FormControl(null),
			"position": new FormControl(null)
		})
	}

	getRoles() {
		this.roleService.getRoles().subscribe(response => {
			this.rolesList = response;
		})
	}

	getClubs() {
		this.clubService.getClubs().subscribe(response => {
			this.clubList = response;
			this.clubList.forEach((element: any) => {
				for (var k in element) {
					if (k !== 'id' && k !== 'name') {
						delete element[k];
					}
				}
			});
		})
	}

	getRegions() {
		this.regionService.getRegions().subscribe(response => {
			this.regionList = response;
		})
	}

	addUser() {
		console.log(this.createUserForm.value);
		let user = this.createUserForm.value;
		this.userService.createUser(user).subscribe(response => {
			console.log(response);
			this.dialogRef.close();
			this.notification.showSnackBar('Пользователь успешно добавлен')
		})
	}
}
