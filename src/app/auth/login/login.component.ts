import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { AuthService } from 'src/app/services/auth.service';


@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
	loginForm!: FormGroup;
	hide: boolean = true;

	constructor(
		private router: Router,
		private tokenStorageService: TokenStorageService,
		private authService: AuthService
	) {
		this.loginForm = new FormGroup({
			"userEmail": new FormControl("", [Validators.required, Validators.email]),
			"password": new FormControl("", Validators.required)
		})
	}

	ngOnInit(): void {
	}

	logIn() {
		let userData = this.loginForm.value;
		this.authService.login().subscribe(response => {
			console.log(response);
			const user = response.find((a: any) => {
				return a.email === userData.userEmail && a.password === userData.password
			})
			this.tokenStorageService.saveUser(user);
			if (user) {
				this.loginForm.reset();
				this.router.navigate(['/dashboard/home']);
			} else {
				alert("Пользователь не существует")
			}
		})
	}


	register() {
		this.router.navigate(['/register']);
	}

}
