import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class NewsService {
	NEWS_API: any = 'http://localhost:3000/news';
	constructor(
		private http: HttpClient,
	) { }

	getNews(): Observable<any> {
		return this.http.get(this.NEWS_API + "?_sort=id&_order=desc");
	}

	createNews(news: any): Observable<any> {
		return this.http.post(this.NEWS_API, news);
	}
}
