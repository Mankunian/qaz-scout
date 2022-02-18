import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ErrorHandlerService } from 'src/app/services/error-handler.service';
import { NotificationService } from 'src/app/services/notification.service';
import { RoleService } from 'src/app/services/role.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class RegisterComponent implements OnInit {
	// email = new FormControl('', [Validators.required, Validators.email]);
	hide: boolean = true;
	isLinear = true;
	// firstFormGroup!: FormGroup;
	registerFormGroup!: FormGroup;
	rolesFormGroup!: FormGroup;
	rolesList: any;
	constructor(
		private router: Router,
		private fb: FormBuilder,
		private authService: AuthService,
		private roleService: RoleService,
		private notificationService: NotificationService,
		private errorHandler: ErrorHandlerService
	) { }

	ngOnInit(): void {
		this.getRoles();
		this.registerFormGroup = this.createRegisterForm();
		this.rolesFormGroup = this.createRolesForm();
	}
	getRoles() {
		this.roleService.getRoles().subscribe(response => {
			console.log(response)
			this.rolesList = response;
		})
	}

	createRolesForm(): FormGroup {
		return this.fb.group({
			role: ['', Validators.required]
		})
	}

	register() {
		let role = this.rolesFormGroup.value.role;
		let userData = this.registerFormGroup.value;
		userData.role = role;

		console.log(userData);
		this.authService.signUp(userData).subscribe((response: any) => {
			console.log(response);
			this.notificationService.showSnackBar('Пользователь успешно зарегестрирован');
			this.registerFormGroup.reset();
			setTimeout(() => {
				this.router.navigate(['/login']);
			}, 2000);
		}, error => {
			this.errorHandler.handleError(error.message)
		})
	}

	createRegisterForm(): FormGroup {
		return this.fb.group({
			email: ['', Validators.compose([Validators.required])],
			phone: ['', Validators.compose([Validators.required])],
			firstname: ['', Validators.compose([Validators.required])],
			lastname: ['', Validators.compose([Validators.required])],
			password: ['', Validators.compose([Validators.required])],
			confirmPassword: ['', Validators.compose([Validators.required])],
			about: [null],
			country: [null],
			address: [null],
			social_links: [null],
			club: [null],
			status: [0],
			position: [null]
		})
	}



	goLogin() {
		this.router.navigate(['/login'])
	}

}
