import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { RoleService } from 'src/app/services/role.service';
import { AuthService } from "../../../../services/auth.service";

@Component({
	selector: 'app-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class ProfileComponent implements OnInit {
	profile: any;
	userRole: any;

	constructor(private authService: AuthService, private roleService: RoleService) { }

	ngOnInit(): void {
		this.userRole = this.roleService.getRoleOfCurrentUser();
		this.getProfileInfo();
	}

	getProfileInfo() {
		this.authService.getProfileService().subscribe(response => {
			console.log(response)
			this.profile = response;
		})
	}

}
