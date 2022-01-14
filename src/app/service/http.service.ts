import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class HttpService {

	constructor(private http: HttpClient) { }

	getProfileService() {
		return this.http.get('assets/json/admin-profile.json')
	}
}
