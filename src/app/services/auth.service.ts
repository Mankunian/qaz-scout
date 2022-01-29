import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class AuthService {

	constructor(private http: HttpClient) {

	}

	getProfileService() {
		return this.http.get('assets/json/admin-profile.json');
	}

	login(userModel: any): void {
		console.log(userModel);
	}


}
