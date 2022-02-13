import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class CoachService {

	constructor(private http: HttpClient) { }

	getCoachInfo(coachId: any): Observable<any> {
		return this.http.get('assets/json/coach/profile.json');
	}
}
