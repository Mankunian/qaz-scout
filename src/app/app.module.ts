/* Angular Modules */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardModule } from './modules/dashboard/dashboard.module';
/* Angular Modules */



/* Components */
import { AppComponent } from './app.component';
import { MAT_RADIO_DEFAULT_OPTIONS } from '@angular/material/radio';
import { MaterialModule } from './material-module';
import { AuthModule } from './auth/auth.module';

/* Components */

@NgModule({
	declarations: [
		AppComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		FormsModule,
		ReactiveFormsModule,
		HttpClientModule,
		DashboardModule,
		MaterialModule,
		AuthModule
	],
	providers: [{
		provide: MAT_RADIO_DEFAULT_OPTIONS,
		useValue: { color: 'primary' },
	}],
	bootstrap: [AppComponent]
})
export class AppModule { }
