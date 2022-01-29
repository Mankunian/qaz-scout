import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class NewsService {

	constructor(private http: HttpClient) { }

	getAllNews() {
		return this.http.get('assets/json/news/all.json');
	}

	getNewsById() {
		alert('Получить новость по id')
	}

	getNewsByClubId() {
		alert('Получить новости по клубу')
	}
}
