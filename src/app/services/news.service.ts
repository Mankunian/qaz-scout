import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RoleService } from './role.service';

@Injectable({
	providedIn: 'root'
})
export class NewsService {

	constructor(
		private http: HttpClient,
		private roleService: RoleService

	) { }

	getNews(): Observable<any> {
		if (this.roleService.getRoleOfCurrentUser() == 'admin') {
			return this.http.get('assets/json/admin/news.json');
		} else {
			return this.http.get('assets/json/common/news.json');
		}
	}
}
