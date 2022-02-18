import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RoleService } from './role.service';

@Injectable({
	providedIn: 'root'
})
export class UserService {
	USERS_API: any = 'http://localhost:3000/users';
	constructor(
		private http: HttpClient,
		private roleService: RoleService
	) { }
	/* Get all users */
	getUsers(): Observable<any> {
		return this.http.get(this.USERS_API);
	}
	/* Update user by id */
	updateUser(user: any): Observable<any> {
		let userId = user.id;
		return this.http.put(this.USERS_API + '/' + userId, user);
	}
	/* Delete user by id */
	deleteUser(userId: any): Observable<any> {
		return this.http.delete(this.USERS_API + '/' + userId);
	}
	/* Get user by id */
	getUserById(userId: any): Observable<any> {
		return this.http.get(this.USERS_API + '/' + userId);
	}
	/* Create user */
	createUser(user: any): Observable<any> {
		return this.http.post(this.USERS_API, user);
	}

	/* Get free agent player */
	getFreeAgents(): any {
		if (this.roleService.getRoleOfCurrentUser() == 'coach') {
			return this.http.get(this.USERS_API + '?status=' + 0 + '&role.code=player');
		} else {
			return this.http.get(this.USERS_API + '?status=' + 0 + '&role.code=coach');
		}
	}

}
