import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { RoleService } from './role.service';

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	REGISTER_API: any = 'http://localhost:3000/register_users';
	LOGIN_API: any = 'http://localhost:3000/login';
	constructor(
		private http: HttpClient,
		private router: Router,
		private roleService: RoleService
	) { }

	// getProfileService() {
	// 	if (this.roleService.getRoleOfCurrentUser() == 'player') {
	// 		return this.http.get('assets/json/player/profile.json');
	// 	} else if (this.roleService.getRoleOfCurrentUser() == 'admin') {
	// 		return this.http.get('assets/json/admin/profile.json')
	// 	} else if (this.roleService.getRoleOfCurrentUser() == 'coach') {
	// 		return this.http.get('assets/json/coach/profile.json')
	// 	} else {
	// 		return this.http.get('assets/json/club/profile.json')
	// 	}
	// }
	/* Login */
	login(): Observable<any> {
		return this.http.get<any>(this.REGISTER_API);
	}

	/* Logout system */
	logOut() {
		this.router.navigate(['/login']);
	}

	/* Register all user */
	signUp(data: any) {
		return this.http.post<any>(this.REGISTER_API, data)
	}


}
