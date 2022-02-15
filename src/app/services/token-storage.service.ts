import { Injectable } from '@angular/core';

const USER_KEY = 'logged_in_user';

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


}
