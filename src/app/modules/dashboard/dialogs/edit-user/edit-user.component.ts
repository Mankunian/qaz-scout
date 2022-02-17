import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ClubService } from 'src/app/services/club.service';
import { NotificationService } from 'src/app/services/notification.service';
import { RegionService } from 'src/app/services/region.service';
import { UserService } from 'src/app/services/user.service';

@Component({
	selector: 'app-edit-user',
	templateUrl: './edit-user.component.html',
	styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
	regionList: any;
	selectedRegion!: region;
	public updateUserForm!: FormGroup;
	clubList: any;
	userRoleCode: any;
	constructor(
		public dialogRef: MatDialogRef<EditUserComponent>,
		@Inject(MAT_DIALOG_DATA) public data: any,
		private regionService: RegionService,
		private formBuilder: FormBuilder,
		private userService: UserService,
		private notification: NotificationService,
		private clubService: ClubService
	) { }

	ngOnInit(): void {
		this.userRoleCode = this.data.role.code;
		this.updateUserForm = new FormGroup({
			"id": new FormControl(this.data.id),
			"firstname": new FormControl(this.data.firstname, Validators.required),
			"lastname": new FormControl(this.data.lastname, Validators.required),
			"region": new FormControl(this.data.region),
			"email": new FormControl(this.data.email, Validators.required),
			"password": new FormControl(this.data.password),
			"phone": new FormControl(this.data.phone),
			"address": new FormControl(this.data.address),
			"img": new FormControl(this.data.img),
			"instagram": new FormControl(this.data.instagram),
			"about": new FormControl(this.data.about),
			"role": new FormControl(this.data.role),
			"club": new FormControl(this.data.club)
		})
		this.getRegions();
		this.getClubs();
	}
	getClubs() {
		this.clubService.getClubs().subscribe(response => {
			this.clubList = response;
		})
	}
	getRegions() {
		this.regionService.getRegions().subscribe(response => {
			this.regionList = response;
		})
	}

	updateUser() {
		console.log(this.updateUserForm.value)
		let user = this.updateUserForm.value;
		this.userService.updateUser(user).subscribe((response: any) => {
			console.log(response);
			this.dialogRef.close();
			this.notification.showSnackBar('Пользователь успешно изменен');
		})
	}

	public objectComparisonFunction = function (option: any, value: any): boolean {
		console.log(option, value)
		return option.code === value.code;
	}
}

interface region {
	code: string;
	name: string;
}