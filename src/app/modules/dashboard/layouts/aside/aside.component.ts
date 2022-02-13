import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { RoleService } from 'src/app/services/role.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
	selector: 'app-aside',
	templateUrl: './aside.component.html',
	styleUrls: ['./aside.component.scss']
})
export class AsideComponent implements OnInit {
	loggedUser: any;
	userRole: any
	constructor(
		private roleService: RoleService,
		private tokenStorageService: TokenStorageService,
		private authService: AuthService
	) { }

	ngOnInit(): void {
		this.userRole = this.roleService.getRoleOfCurrentUser();
		this.loggedUser = this.tokenStorageService.getUser();
		console.log(this.loggedUser)
	}

	logOut() {
		this.authService.logOut();
	}

}
