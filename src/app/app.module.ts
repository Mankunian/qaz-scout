/* Angular Modules */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { DashboardRoutingModule } from "./modules/dashboard/dashboard-routing.module";
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
/* Angular Modules */

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
		DashboardRoutingModule,
		BrowserAnimationsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
