import { Injectable } from '@angular/core';

const USER_KEY = 'auth-user';

@Injectable({
	providedIn: 'root'
})
export class TokenStorageService {

	constructor() { }

	public saveUser(user: any): void {
		window.sessionStorage.removeItem(USER_KEY);
		window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
	}

	public getUser(): any {
		return JSON.parse(sessionStorage.getItem(USER_KEY) || '{}');
	}

	public getRoleOfCurrentUser(): any {
		let loggedUser = this.getUser();
		if (loggedUser.role.code == 'admin') {
			return 'admin';
		} else if (loggedUser.role.code == 'club') {
			return 'club';
		}
		return '';
	}
}
