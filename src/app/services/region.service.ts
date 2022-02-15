import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class RegionService {
	REGIONS_API: any = 'http://localhost:3000/regions';
	constructor(private http: HttpClient) { }

	getRegions(): Observable<any> {
		return this.http.get(this.REGIONS_API);
	}
}
