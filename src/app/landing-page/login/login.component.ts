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
	roleGroup: { id: number; code: string; name: string; }[] = [];

	constructor(
		private router: Router,
		private tokenStorageService: TokenStorageService,
		private authService: AuthService
	) {
		this.loginForm = new FormGroup({
			"userEmail": new FormControl("", [Validators.required, Validators.email]),
			"password": new FormControl("", Validators.required),
			"role": new FormControl("", Validators.required),
			"hasClub": new FormControl(true)
		})
	}

	ngOnInit(): void {
		this.getRolesGroup();
	}

	getRolesGroup() {
		this.roleGroup = [
			{ id: 1, code: 'club', name: 'Администратор клуба' },
			{ id: 2, code: 'player', name: 'Футбольный игрок' },
			{ id: 3, code: 'coach', name: 'Футбольный тренер' },
			{ id: 4, code: 'admin', name: 'Админ платформы' },
		]
	}

	logIn() {
		let userData = this.loginForm.value;
		this.tokenStorageService.saveUser(userData);

		console.log(userData);

		this.router.navigate(['/dashboard/home']);
	}


	register() {
		this.router.navigate(['/register']);
	}

}
