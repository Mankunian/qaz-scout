import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class PositionService {
	POSITION_API: any = 'http://localhost:3000/positions/';
	constructor(private http: HttpClient) { }

	/* Get positions list */
	getPositions(): Observable<any> {
		return this.http.get(this.POSITION_API);
	}
}
