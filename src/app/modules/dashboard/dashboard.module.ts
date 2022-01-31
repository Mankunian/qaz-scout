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

@NgModule({
	declarations: [
		DashboardComponent,
		AsideComponent,
		HeaderComponent,
		FooterComponent,
		HomeComponent,
		StatsComponent,
		EmailComponent,
		NewsComponent,
		AddNewsComponent,
		AddUserComponent,
		EditNewsComponent,
		AddCoachComponent,
		FreeAgentsComponent,
		AddPlayerComponent,
		SquadsComponent,
		YouthAcademyComponent,
		CoachesComponent,
		AdministrationStaffComponent,
	],
	imports: [
		CommonModule,
		RouterModule,
		DashboardRoutingModule,
		FormsModule,
		MaterialModule
	],
	exports: [CommonModule],
	schemas: [
		CUSTOM_ELEMENTS_SCHEMA
	],
})
export class DashboardModule { }
