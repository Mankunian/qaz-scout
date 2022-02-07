import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class ClubService {

	constructor(private http: HttpClient) { }

	getClubInfo(clubId: any): Observable<any> {
		return this.http.get('assets/json/common/club.json');
	}
}
