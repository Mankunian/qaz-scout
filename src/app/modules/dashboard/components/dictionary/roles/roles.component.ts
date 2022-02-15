import { Component, OnInit } from '@angular/core';
import { RoleService } from 'src/app/services/role.service';

@Component({
	selector: 'app-roles',
	templateUrl: './roles.component.html',
	styleUrls: ['./roles.component.scss']
})
export class RolesComponent implements OnInit {
	rolesList: any;

	constructor(private roleService: RoleService) { }

	ngOnInit(): void {
		this.getRoles();
	}

	getRoles() {
		this.roleService.getRoles().subscribe(response => {
			this.rolesList = response;
		})
	}

}
