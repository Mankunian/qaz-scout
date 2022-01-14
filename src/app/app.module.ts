/* Modules */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { DashboardRoutingModule } from "./modules/dashboard/dashboard-routing.module";
/* Modules */

/* Components */
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
/* Components */

@NgModule({
	declarations: [
		AppComponent,
		LandingPageComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		DashboardRoutingModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
