/* Angular Modules */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { DashboardModule } from "./modules/dashboard/dashboard.module";
import { DashboardClubModule } from "./modules/dashboard-club/dashboard-club.module";
import { DashboardCoachModule } from "./modules/dashboard-coach/dashboard-coach.module";
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
/* Angular Modules */


/* Shared module */
import { AngularMaterialModule } from './angular-material.module';
/* Shared module */


/* Components */
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from "../app/landing-page/login/login.component";
import { RegisterComponent } from './landing-page/register/register.component';
import { MAT_RADIO_DEFAULT_OPTIONS } from '@angular/material/radio';
/* Components */

@NgModule({
	declarations: [
		AppComponent,
		LandingPageComponent,
		LoginComponent,
		RegisterComponent
	],
	imports: [
		FormsModule,
		ReactiveFormsModule,
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		BrowserAnimationsModule,
		DashboardClubModule,
		DashboardModule,
		DashboardCoachModule,
		AngularMaterialModule,
	],
	providers: [{ provide: MAT_RADIO_DEFAULT_OPTIONS,
    useValue: { color: 'primary' },}],
	bootstrap: [AppComponent]
})
export class AppModule { }
