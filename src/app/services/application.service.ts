import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenStorageService } from './token-storage.service';

@Injectable({
	providedIn: 'root'
})
export class ApplicationService {
	APPS_API: any = 'http://localhost:3000/applications';
	constructor(private http: HttpClient, private tokenStorage: TokenStorageService) { }

	getAllApplications() {
		return this.http.get(this.APPS_API);
	}

	getApplicationsById() {
		let currentUser = this.tokenStorage.getUser();
		return this.http.get(this.APPS_API + '?applicationTo.id=' + currentUser.id)
			.toPromise()
			.then(res => res)
			.then(data => { return data; });
	}

	sendApplication(appDetail: any) {
		return this.http.post(this.APPS_API, appDetail);
	}
}
