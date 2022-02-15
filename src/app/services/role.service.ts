import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenStorageService } from './token-storage.service';

@Injectable({
	providedIn: 'root'
})
export class RoleService {
	ROLES_API: any = 'http://localhost:3000/roles'
	constructor(private tokenStorageService: TokenStorageService, private http: HttpClient) { }

	public getRoleOfCurrentUser(): any {
		let loggedUser = this.tokenStorageService.getUser();
		if (loggedUser.role.code == 'admin') {
			return 'admin';
		} else if (loggedUser.role.code == 'club') {
			return 'club';
		} else if (loggedUser.role.code == 'player') {
			return 'player';
		} else {
			return 'coach';
		}
	}

	public getRoles(): Observable<any> {
		return this.http.get(this.ROLES_API);
	}
}
