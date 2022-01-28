import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/services/notification.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class RegisterComponent implements OnInit {
	email = new FormControl('', [Validators.required, Validators.email]);
	hide: boolean = true;
	favoriteSeason!: string
	seasons: any;
	
	isLinear = true;
	// firstFormGroup!: FormGroup;
	registerFormGroup!: FormGroup;
	rolesFormGroup!: FormGroup;
	constructor(
		private router: Router,
		private fb: FormBuilder,
		private notification: NotificationService,
		private tokenStorageService: TokenStorageService
	) { }

	ngOnInit(): void {
		this.seasons = [
			{id: 1, code: 'coach', name: 'Тренер'},
			{id: 2, code: 'player', name: 'Игрок'},
			{id: 3, code: 'club', name: 'Клуб'},
		]
		this.registerFormGroup = this.createRegisterForm();
		this.rolesFormGroup = this.createRolesForm();
	}

	createRolesForm(): FormGroup {
		return this.fb.group({
			roles: ['', Validators.required]
		})
	}

	register() {
		let roles = this.rolesFormGroup.value.roles;
		let userData = this.registerFormGroup.value;
		userData.roles = roles;
		userData.clubId = null;

		console.log(userData)
		this.notification.showSnackBar('Аккаунт успешно создан');
		this.tokenStorageService.saveUser(userData);
		setTimeout(() => {
			this.router.navigate(['/login']);
		}, 2000);
	}

	createRegisterForm(): FormGroup {
		return this.fb.group({
			email: ['', Validators.compose([Validators.required])],
			phone: ['', Validators.compose([Validators.required])],
			firstname: ['', Validators.compose([Validators.required])],
			lastname: ['', Validators.compose([Validators.required])],
			password: ['', Validators.compose([Validators.required])],
			confirmPassword: ['', Validators.compose([Validators.required])],
		})
	}

	getErrorMessage() {
		if (this.email.hasError('required')) {
			return 'Вы должны ввести значение';
		}

		return this.email.hasError('email') ? 'Недействительный адрес электронной почты' : '';
	}



	goLogin() {
		this.router.navigate(['/login'])
	}

}
