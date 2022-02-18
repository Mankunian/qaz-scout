import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { NewsService } from 'src/app/services/news.service';

@Component({
	selector: 'app-news-details',
	templateUrl: './news-details.component.html',
	styleUrls: ['./news-details.component.scss']
})
export class NewsDetailsComponent implements OnInit {
	newsDetail: any;
	newsList: any;

	constructor(private route: ActivatedRoute, private newsService: NewsService, private router: Router) {
		router.events.subscribe((val) => {
			console.log(val)
		})
		let newsId = this.route.snapshot.paramMap.get('id');
		this.getNewsById(newsId);
		this.getNewsList();
	}
	getNewsById(newsId: any) {
		this.newsService.getNewsById(newsId).subscribe(response => {
			console.log(response)
			this.newsDetail = response;
		})
	}

	ngOnInit(): void {
	}

	getNewsList() {
		this.newsService.getNews().subscribe(response => {
			console.log(response);
			this.newsList = response;
		})
	}

}
