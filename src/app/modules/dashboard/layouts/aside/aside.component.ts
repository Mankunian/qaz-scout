import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent implements OnInit {
	loggedUser: any;

  constructor(private tokenStorage: TokenStorageService) { }

	ngOnInit(): void {
		this.loggedUser = this.tokenStorage.getUser();
		console.log(this.loggedUser)
  }

}
