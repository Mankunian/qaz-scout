import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddNewsComponent } from '../../dialogs/add-news/add-news.component';
import { EditNewsComponent } from '../../dialogs/edit-news/edit-news.component';

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
			{ id: 4, imgUrl: 'logo1.png', title: 'Платформа QazScout', desc: 'Недавно было добавлена новая фитча по добавлнию новых игроков, отправка заявки свободным агентам', createdDate: '05.02.2022' },
		]
	}

	openAddNewsDialog() {
		const dialogRef = this.dialog.open(AddNewsComponent, {
			width: '400px',
		});
		dialogRef.afterClosed().subscribe(result => {
			console.log(`Dialog result: ${result}`);
		});
	}

	openEditNewsDialog(element: any) {
		const dialogRef = this.dialog.open(EditNewsComponent, {
			width: '400px',
			data: element
		})
		dialogRef.afterClosed().subscribe(result => {
			console.log(`Dialog result: ${result}`);
		});
	}

}
