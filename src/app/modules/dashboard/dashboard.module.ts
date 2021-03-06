/* Modules */
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { DashboardRoutingModule } from './dashboard-routing.module';
/* Modules */

/* Components */
import { DashboardComponent } from "../dashboard/dashboard.component";
import { AsideComponent } from './layouts/aside/aside.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { StatsComponent } from './components/stats/stats.component';
import { EmailComponent } from './components/email/email.component';
import { NewsComponent } from './components/news/news.component';
import { FreeAgentsComponent } from './components/free-agents/free-agents.component';
/* Components */

/* Dialog components */
import { AddNewsComponent } from './dialogs/add-news/add-news.component';
import { EditNewsComponent } from './dialogs/edit-news/edit-news.component';
import { AddUserComponent } from './dialogs/add-user/add-user.component';
import { AddCoachComponent } from './dialogs/add-coach/add-coach.component';
import { AddPlayerComponent } from './dialogs/add-player/add-player.component';
import { MaterialModule } from 'src/app/material-module';
/* Dialog components */
import { SquadsComponent } from './components/club/squads/squads.component';
import { YouthAcademyComponent } from './components/club/youth-academy/youth-academy.component';
import { CoachesComponent } from './components/club/coaches/coaches.component';
import { AdministrationStaffComponent } from './components/club/administration-staff/administration-staff.component';
import { TrainingCenterComponent } from './components/training-center/training-center.component';

/* Primeng modules */
import { ChartModule } from 'primeng/chart';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';

/* Primeng modules */

import { AnalyticsComponent } from './components/analytics/analytics.component';
import { FaqComponent } from './components/faq/faq.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { UsersComponent } from './components/dictionary/users/users.component';
import { RolesComponent } from './components/dictionary/roles/roles.component';
import { RegionsComponent } from './components/dictionary/regions/regions.component';
import { ClubsComponent } from './components/dictionary/clubs/clubs.component';
import { HomeClubComponent } from './components/home/home-club/home-club.component';
import { GetInboxComponent } from './dialogs/get-inbox/get-inbox.component';
import { TableComponent } from './components/club/table/table.component';
import { FixturesComponent } from './components/club/fixtures/fixtures.component';
import { HomeCoachComponent } from './components/home/home-coach/home-coach.component';
import { CoachDetailsComponent } from './components/coach-details/coach-details.component';
import { ProfileComponent } from './components/profile/profile.component';
import { PrimengModule } from 'src/app/primeng-module';
import { EditUserComponent } from './dialogs/edit-user/edit-user.component';
import { AddClubComponent } from './dialogs/add-club/add-club.component';
import { EditClubComponent } from './dialogs/edit-club/edit-club.component';
import { AddImagesComponent } from './dialogs/add-images/add-images.component';
import { AddVideoComponent } from './dialogs/add-video/add-video.component';
import { HomePlayerComponent } from './components/home/home-player/home-player.component';
import { NewsDetailsComponent } from './components/news/news-details/news-details.component';
import { FreeAgentDetailsComponent } from './components/free-agents/free-agent-details/free-agent-details.component';
@NgModule({
	declarations: [
		/* Main */
		DashboardComponent,
		AsideComponent,
		HeaderComponent,
		FooterComponent,
		HomeComponent,
		NewsComponent,
		StatsComponent,
		AnalyticsComponent,
		EmailComponent,
		TrainingCenterComponent,
		FreeAgentsComponent,
		FaqComponent,
		ContactsComponent,
		/* Main */

		/* Club */
		SquadsComponent,
		CoachesComponent,
		YouthAcademyComponent,
		AdministrationStaffComponent,
		/* Club */

		/* Dictionary */
		UsersComponent,
		RolesComponent,
		RegionsComponent,
		ClubsComponent,
		/* Dictionary */

		/* Dialogs */
		AddNewsComponent,
		AddUserComponent,
		EditNewsComponent,
		AddCoachComponent,
		AddPlayerComponent,
		HomeClubComponent,
		GetInboxComponent,
		TableComponent,
		FixturesComponent,
		HomeCoachComponent,
		CoachDetailsComponent,
		ProfileComponent,
		EditUserComponent,
  AddClubComponent,
  EditClubComponent,
  AddImagesComponent,
  AddVideoComponent,
  HomePlayerComponent,
  NewsDetailsComponent,
  FreeAgentDetailsComponent
		/* Dialogs */
	],
	imports: [
		CommonModule,
		RouterModule,
		DashboardRoutingModule,
		FormsModule,
		ReactiveFormsModule,
		MaterialModule,
		ChartModule,
		TableModule,
		ButtonModule,
		PrimengModule
	],
	exports: [CommonModule],
	schemas: [
		CUSTOM_ELEMENTS_SCHEMA
	],
})
export class DashboardModule { }
