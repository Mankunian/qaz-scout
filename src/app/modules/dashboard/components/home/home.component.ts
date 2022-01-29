import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
	loggedInUser: any;

  constructor(private tokenStorage: TokenStorageService) { }

	ngOnInit(): void {
		this.loggedInUser = this.tokenStorage.getUser();
  }

}
