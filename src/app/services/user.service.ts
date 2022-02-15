import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class UserService {
	USERS_API: any = 'http://localhost:3000/register_users';
	constructor(private http: HttpClient) { }

	getUsers(): Observable<any> {
		return this.http.get(this.USERS_API);
	}
}
