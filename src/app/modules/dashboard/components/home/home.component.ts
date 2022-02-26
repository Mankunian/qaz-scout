import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
	loggedInUser: any;
	clubTodos: any;
	myDate!: number;
	newDate!: Date;

	constructor(private tokenStorage: TokenStorageService) { }

	ngOnInit(): void {
		this.myDate = Date.now();
		this.newDate = new Date();
		this.loggedInUser = this.tokenStorage.getUser();
		console.log(this.loggedInUser)
	}

}
