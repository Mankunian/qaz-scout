import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RoleService } from 'src/app/services/role.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { AuthService } from "../../../../services/auth.service";

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


	constructor(
		private authService: AuthService,
		private roleService: RoleService,
		private tokenStorage: TokenStorageService,
		private formBuilder: FormBuilder
	) { }

	ngOnInit(): void {
		// this.userRole = this.roleService.getRoleOfCurrentUser();
		this.getProfileInfo();
		this.createProfileForm();
	}
	createProfileForm() {
		return this.profileForm = this.formBuilder.group({
			img: [this.profile.img],
			fullName: [this.profile.lastname + ' ' + this.profile.firstname],
			about: [this.profile.about],
			club: [this.profile.club?.name],
			role: [this.profile.role],
			country: [this.profile.country?.name],
			address: [this.profile.address],
			phone: [this.profile.phone],
			email: [this.profile.email],
			instagram: [this.profile.social_links]
		})
	}

	getProfileInfo() {
		/* Чтобы не делать лишний запрос получаем инфу о юзере с sessionStorage */
		this.profile = this.tokenStorage.getUser();
		this.profile.fullName = this.setFullName();

	}

	setFullName(): string {
		return this.profile.lastname + ' ' + this.profile.firstname;
	}

	updateProfile() {
		let changedProfileInfo = this.profileForm.value;
		console.log(changedProfileInfo)
	}

}
