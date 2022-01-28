import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddNewsComponent } from 'src/app/modules/dashboard/dialogs/add-news/add-news.component';

@Component({
	selector: 'app-news',
	templateUrl: './news.component.html',
	styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

	constructor(public dialog: MatDialog) { }

	ngOnInit(): void {
	}

	openAddNewsDialog() {
		const dialogRef = this.dialog.open(AddNewsComponent, {
			width: '400px',
		});
		dialogRef.afterClosed().subscribe(result => {
			console.log(`Dialog result: ${result}`);
		});
	}

}
