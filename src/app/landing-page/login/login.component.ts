import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TokenStorageService } from 'src/app/services/token-storage.service';


@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
	loginForm!: FormGroup;
	hide: boolean = false;
	constructor(
		private router: Router,
		private tokenStorageService: TokenStorageService
	) {
		this.loginForm = new FormGroup({
			"userEmail": new FormControl("", [Validators.required, Validators.email]),
			"password": new FormControl("", Validators.required),
			"role": new FormControl("", Validators.required),
			"hasClub": new FormControl(false)
		})
	}

	ngOnInit(): void {
	}

	logIn() {
		// let userData = this.loginForm.value;
		// let userDataFromStorage = this.tokenStorageService.getUser();
		// if (userData.userEmail == userDataFromStorage.email && userData.password == userDataFromStorage.password) {
		// 	alert('Совпадает')
		// } else {
		// 	alert('Не совпадает')
		// }
		let userDetails = this.loginForm.value;
		console.log(userDetails);
		if (userDetails.role == 'admin') {
			this.router.navigate(['/dashboard-admin/home'])
		} else if (userDetails.role == 'club') {
			this.router.navigate(['/dashboard-club/home'])
		} else if (userDetails.role == 'coach') {
			this.router.navigate(['/dashboard-coach/home'])
		}
	}
	register() {
		this.router.navigate(['/register']);
	}

}
