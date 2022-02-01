import { Component, OnInit } from '@angular/core';
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
		private tokenStorageService: TokenStorageService
	) { }

	ngOnInit(): void {
		this.userRole = this.roleService.getRoleOfCurrentUser();
		this.loggedUser = this.tokenStorageService.getUser();
		console.log(this.loggedUser)
	}

}
