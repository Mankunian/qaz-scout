import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

	constructor(private router: Router) { }

	ngOnInit(): void {
	}

	logIn() {
		this.router.navigate(['/dashboard-admin/home']);
	}
	register() {
		this.router.navigate(['/register']);
	}

}
