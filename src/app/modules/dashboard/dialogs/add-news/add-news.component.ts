import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { NewsService } from 'src/app/services/news.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
	selector: 'app-add-news',
	templateUrl: './add-news.component.html',
	styleUrls: ['./add-news.component.scss']
})
export class AddNewsComponent implements OnInit {
	addNewsForm!: FormGroup;
	createdDate: any;
	constructor(
		public dialogRef: MatDialogRef<AddNewsComponent>,
		private newsService: NewsService,
		private notificationService: NotificationService
	) {
		let today = new Date();
		this.createdDate = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear()
		this.addNewsForm = new FormGroup({
			"img": new FormControl(null),
			"title": new FormControl(null, Validators.required),
			"description": new FormControl(null, Validators.required),
			"createdDate": new FormControl(this.createdDate)
		})

	}

	ngOnInit(): void {
	}

	addNews(): void {
		let news = this.addNewsForm.value;
		this.newsService.createNews(news).subscribe((response: any) => {
			console.log(response);
			this.dialogRef.close();
			this.notificationService.showSnackBar('Новость добавлена')
		})
	}

}
