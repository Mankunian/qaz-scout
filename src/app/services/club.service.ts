import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class ClubService {
	CLUB_API: any = 'http://localhost:3000/clubs/';
	constructor(private http: HttpClient) { }

	/* Test API */
	getClubInfo(clubId: any): Observable<any> {
		return this.http.get('assets/json/common/club.json');
	}

	/* CREATE */
	createClub(clubInfo: any): Observable<any> {
		return this.http.post(this.CLUB_API, clubInfo)
	}

	/* GET  */
	getClubs(): Observable<any> {
		return this.http.get(this.CLUB_API);
	}

	/* DELETE  */
	deleteClub(clubId: any) {
		return this.http.delete(this.CLUB_API + clubId);
	}

	/* UPDATE */
	updateClub(club: any) {
		let clubId = club.id;
		return this.http.put(this.CLUB_API + clubId, club);
	}
}
