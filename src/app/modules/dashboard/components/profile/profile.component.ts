import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import { RoleService } from 'src/app/services/role.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { UserService } from 'src/app/services/user.service';
import { AuthService } from "../../../../services/auth.service";
import { AddImagesComponent } from '../../dialogs/add-images/add-images.component';
import { AddVideoComponent } from '../../dialogs/add-video/add-video.component';
import { EditUserComponent } from '../../dialogs/edit-user/edit-user.component';

@Component({
	selector: 'app-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class ProfileComponent implements OnInit {
	// userRole: any;
	profile: any;
	public profileForm!: FormGroup;
	safeURL: any;


	constructor(
		private tokenStorage: TokenStorageService,
		private formBuilder: FormBuilder,
		private userService: UserService,
		public dialog: MatDialog,
		private _sanitizer: DomSanitizer
	) { }

	ngOnInit(): void {
		this.getProfileInfo();
	}

	getProfileInfo() {
		let user = this.tokenStorage.getUser();
		this.userService.getUserById(user.id).subscribe(response => {
			console.log(response);
			this.profile = response;
			this.profile.fullName = this.setFullName();
			this.profile?.videos?.forEach((element: any) => {
				console.log(element)
				this.safeURL = this._sanitizer.bypassSecurityTrustResourceUrl(element);
			});
		})
	}

	setFullName(): string {
		return this.profile.lastname + ' ' + this.profile.firstname;
	}

	openEditUserDialog(profile: any) {
		const dialogRef = this.dialog.open(EditUserComponent, {
			width: '600px',
			data: profile
		});
		dialogRef.afterClosed().subscribe(result => {
			this.getProfileInfo();
		});
	}

	openAddImagesDialog(profile: any) {
		console.log(profile);
		const dialogRef = this.dialog.open(AddImagesComponent, {
			width: '400px',
			data: profile
		});
		dialogRef.afterClosed().subscribe(result => {
			this.getProfileInfo();
		});
	}

	openAddVideosDialog(profile: any) {
		const dialogRef = this.dialog.open(AddVideoComponent, {
			width: '400px',
			data: profile
		});
		dialogRef.afterClosed().subscribe(result => {
			this.getProfileInfo();
		});
	}

}
