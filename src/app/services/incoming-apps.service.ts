import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RoleService } from './role.service';

@Injectable({
	providedIn: 'root'
})
export class IncomingAppsService {

	constructor(
		private http: HttpClient,
		private roleService: RoleService
	) { }

	getApps() {
		if (this.roleService.getRoleOfCurrentUser() == 'admin') {
			return this.http.get<any>('assets/json/admin/apps.json')
				.toPromise()
				.then(res => res.data)
				.then(data => { return data; });
		} else if (this.roleService.getRoleOfCurrentUser() == 'coach') {
			return this.http.get<any>('assets/json/coach/apps.json')
				.toPromise()
				.then(res => res.data)
				.then(data => { return data; });
		} else {
			return this.http.get<any>('assets/json/player/apps.json')
				.toPromise()
				.then(res => res.data)
				.then(data => { return data; });
		}

	}
}
