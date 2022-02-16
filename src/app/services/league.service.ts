import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class LeagueService {
	LEAGUE_API: any = 'http://localhost:3000/leagues';
	constructor(private http: HttpClient) { }

	getLeagues(): Observable<any> {
		return this.http.get(this.LEAGUE_API);
	}
}
