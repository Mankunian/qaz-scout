import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewsService } from 'src/app/services/news.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { AddNewsComponent } from '../../dialogs/add-news/add-news.component';
import { EditNewsComponent } from '../../dialogs/edit-news/edit-news.component';

@Component({
	selector: 'app-news',
	templateUrl: './news.component.html',
	styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
	newsList: any;
	isRole: any
	constructor(
		public dialog: MatDialog,
		private tokenStorageService: TokenStorageService,
		private newsService: NewsService
	) { }

	ngOnInit(): void {
		this.getNewsList();
		this.isRole = this.tokenStorageService.getRoleOfCurrentUser();
	}


	getNewsList() {
		this.newsService.getAllNews().subscribe(response => {
			console.log(response);
			this.newsList = response;
		})
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
