import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
	loginForm!: FormGroup;
	constructor(private router: Router) {
		this.loginForm = new FormGroup({
			"userEmail": new FormControl("", [Validators.required, Validators.email]),
			"password": new FormControl("", Validators.required),
			"role": new FormControl("", Validators.required)
		})
	}

	ngOnInit(): void {
	}

	logIn() {
		let userDetails = this.loginForm.value;
		console.log(userDetails);
		if (userDetails.role == 'admin') {
			this.router.navigate(['/dashboard-admin/home'])
		} else if (userDetails.role == 'club') {
			this.router.navigate(['/dashboard-club/home'])
		}
	}
	register() {
		this.router.navigate(['/register']);
	}

}
