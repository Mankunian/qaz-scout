/* Angular Modules */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { MaterialModule } from './material-module';
/* Angular Modules */

/* Components */
import { AppComponent } from './app.component';
import { MAT_RADIO_DEFAULT_OPTIONS } from '@angular/material/radio';
/* Components */

// import { AngularFireModule } from 'angularfire2';

export const firebasConfig = {
	apiKey: "AIzaSyB1anNmhA4_f8WaYdfw4E_L0zSXHiv6AMc",
	authDomain: "qaz-scout.firebaseapp.com",
	projectId: "qaz-scout",
	storageBucket: "qaz-scout.appspot.com",
	messagingSenderId: "566928241965",
	appId: "1:566928241965:web:e7c2d054cc3b64dbc60fa4",
	measurementId: "G-RZ9N1RKMN6"
}

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
	],
	providers: [{
		provide: MAT_RADIO_DEFAULT_OPTIONS,
		useValue: { color: 'primary' },
	}],
	bootstrap: [AppComponent]
})
export class AppModule { }
