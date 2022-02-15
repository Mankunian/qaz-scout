import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
	selector: 'app-users',
	templateUrl: './users.component.html',
	styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
	userList: any;

	constructor(private userService: UserService) { }

	ngOnInit(): void {
		this.getUsers();
	}

	getUsers() {
		this.userService.getUsers().subscribe(response => {
			console.log(response);
			this.userList = response;
		})
	}

}
