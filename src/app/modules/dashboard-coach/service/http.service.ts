import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class HttpService {

	constructor(private http: HttpClient) { }

	getProfileCoachService() {
		return this.http.get('assets/json/coach-profile.json')
	}
}
