/* Angular Modules */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { DashboardModule } from "./modules/dashboard/dashboard.module";
import { DashboardClubModule } from "./modules/dashboard-club/dashboard-club.module";
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
/* Components */

@NgModule({
	declarations: [
		AppComponent,
		LandingPageComponent,
		LoginComponent,
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
		AngularMaterialModule,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
