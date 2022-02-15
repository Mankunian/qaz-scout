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

	/* Login */
	login(): Observable<any> {
		return this.http.get<any>(this.REGISTER_API);
	}

	/* Logout system */
	logOut() {
		this.router.navigate(['/login']);
		window.sessionStorage.clear()
	}

	/* Register all user */
	signUp(data: any) {
		return this.http.post<any>(this.REGISTER_API, data)
	}


}
