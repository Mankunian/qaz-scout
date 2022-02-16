import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class UserService {
	USERS_API: any = 'http://localhost:3000/register_users/';
	constructor(private http: HttpClient) { }

	getUsers(): Observable<any> {
		return this.http.get(this.USERS_API);
	}

	updateUser(user: any): Observable<any> {
		let userId = user.id;
		return this.http.put(this.USERS_API + userId, user);
	}

	deleteUser(userId: any): Observable<any> {
		return this.http.delete(this.USERS_API + userId);
	}
}
