import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class NewsService {

	constructor() { }
	getAllNews(): void {
		alert('Получить все новости какие только есть')
	}

	getNewsById(): void {
		alert('Получить новость по id')
	}

	getNewsByClubId(): void {
		alert('Получить новости по клубу')
	}
}
