import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './landing-page/login/login.component';
import { RegisterComponent } from './landing-page/register/register.component';

const routes: Routes = [
	{ path: '', redirectTo: '/login', pathMatch: 'full' },
	{ path: 'login', component: LoginComponent },
	{ path: 'register', component: RegisterComponent },
	{
		path: 'dashboard-admin', loadChildren: () =>
			import('./modules/dashboard/dashboard.module').then((m) => m.DashboardModule)
	},
	{
		path: 'dashboard-club', loadChildren: () =>
			import('./modules/dashboard-club/dashboard-club.module').then((m) => m.DashboardClubModule)
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
