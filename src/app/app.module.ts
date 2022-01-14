import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './dashboard/layouts/header/header.component';
import { AsideComponent } from './dashboard/layouts/aside/aside.component';
import { FooterComponent } from './dashboard/layouts/footer/footer.component';
import { RouterModule } from '@angular/router';
import { MainComponent } from './dashboard/layouts/main/main.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { UsersComponent } from './dashboard/dictionary/users/users.component';
import { RolesComponent } from './dashboard/dictionary/roles/roles.component';
import { RegionsComponent } from './dashboard/dictionary/regions/regions.component';
import { ClubsComponent } from './dashboard/dictionary/clubs/clubs.component';
import { AnalyticsComponent } from './dashboard/pages/analytics/analytics.component';
import { IconsBootstrapComponent } from './dashboard/pages/icons/icons-bootstrap/icons-bootstrap.component';
import { IconsBoxiconsComponent } from './dashboard/pages/icons/icons-boxicons/icons-boxicons.component';
import { IconsRemixComponent } from './dashboard/pages/icons/icons-remix/icons-remix.component';
import { ProfileComponent } from './dashboard/pages/profile/profile.component';
import { FaqComponent } from './dashboard/pages/faq/faq.component';
import { ContactsComponent } from './dashboard/pages/contacts/contacts.component';
@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		AsideComponent,
		FooterComponent,
		MainComponent,
		LoginComponent,
		RegisterComponent,
		UsersComponent,
		RolesComponent,
		RegionsComponent,
		ClubsComponent,
		AnalyticsComponent,
  IconsBootstrapComponent,
  IconsBoxiconsComponent,
  IconsRemixComponent,
  ProfileComponent,
  FaqComponent,
  ContactsComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		RouterModule,
		HttpClientModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
