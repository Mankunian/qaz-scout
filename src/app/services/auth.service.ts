import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { RoleService } from './role.service';

@Injectable({
	providedIn: 'root'
})
export class AuthService {

	constructor(
		private http: HttpClient,
		private router: Router,
		private roleService: RoleService
	) { }

	getProfileService() {
		if (this.roleService.getRoleOfCurrentUser() == 'player') {
			return this.http.get('assets/json/player/profile.json');
		} else if (this.roleService.getRoleOfCurrentUser() == 'admin') {
			return this.http.get('assets/json/admin/profile.json')
		} else if (this.roleService.getRoleOfCurrentUser() == 'coach') {
			return this.http.get('assets/json/coach/profile.json')
		} else {
			return this.http.get('assets/json/club/profile.json')
		}
	}

	login(userModel: any): void {
		console.log(userModel);
	}

	logOut() {
		this.router.navigate(['/login']);
	}


}
