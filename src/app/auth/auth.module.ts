import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';



/* Components */
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MaterialModule } from '../material-module';
/* Components */

const routes: Routes = [
	{ path: '', redirectTo: '/login', pathMatch: 'full' },
	{ path: 'login', component: LoginComponent, data: { title: 'Sign in' } },
	{ path: 'register', component: RegisterComponent, data: { title: 'Sign up' } },
	{ path: 'forgot-password', component: ForgotPasswordComponent, data: { title: 'Forgot password' } },
]

@NgModule({
	declarations: [
		LoginComponent,
		RegisterComponent,
		NotFoundComponent
	],
	imports: [
		CommonModule,
		RouterModule.forChild(routes),
		ReactiveFormsModule,
		MaterialModule
	],
	schemas: [
		CUSTOM_ELEMENTS_SCHEMA
	],
})
export class AuthModule { }
