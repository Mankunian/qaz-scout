import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RoleService } from './role.service';

@Injectable({
	providedIn: 'root'
})
export class StatsService {

	constructor(
		private http: HttpClient,
		private roleService: RoleService
	) { }

	getStats() {
		if (this.roleService.getRoleOfCurrentUser() == 'admin') {
			return this.http.get('assets/json/admin/stats.json');
		} else {
			return this.http.get('assets/json/common/stats.json');
		}
	}
}
