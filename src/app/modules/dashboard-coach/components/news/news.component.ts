import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
	selector: 'app-news',
	templateUrl: './news.component.html',
	styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

	newsList: any

	constructor(public dialog: MatDialog) { }

	ngOnInit(): void {
		this.newsList = [
			{ id: 1, imgUrl: 'afl.jpg', title: 'Астана футбол лигасы', desc: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.', createdDate: '01.02.2022' },
			{ id: 2, imgUrl: '1.jpg', title: 'Сборная Англия', desc: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.', createdDate: '05.02.2022' },
			{ id: 3, imgUrl: '2.jpg', title: 'Сборная Англия', desc: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.', createdDate: '05.02.2022' },
			{ id: 4, imgUrl: '1.jpg', title: 'Платформа QazScout', desc: 'Недавно было добавлена новая фитча по добавлнию новых игроков, отправка заявки свободным агентам', createdDate: '05.02.2022' },
		]
	}


}
