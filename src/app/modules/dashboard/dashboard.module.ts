/* Modules */
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from "@angular/forms";
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
		/* Dialogs */
	],
	imports: [
		CommonModule,
		RouterModule,
		DashboardRoutingModule,
		FormsModule,
		MaterialModule,
		ChartModule,
		TableModule,
		ButtonModule
	],
	exports: [CommonModule],
	schemas: [
		CUSTOM_ELEMENTS_SCHEMA
	],
})
export class DashboardModule { }
