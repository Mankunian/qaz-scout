import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
/* Routing module */
import { DashboardClubRoutingModule } from './dashboard-club-routing.module';

/* Components */
import { AsideComponent } from "../dashboard-club/layouts/aside/aside.component";
import { FooterComponent } from "../dashboard-club/layouts/footer/footer.component";
import { HeaderComponent } from "../dashboard-club/layouts/header/header.component";
import { DashboardClubComponent } from "../dashboard-club/dashboard-club.component";
import { HomeComponent } from "../dashboard-club/components/home/home.component";
import { PostComponent } from './components/post/post.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { SquadsComponent } from './components/club/squads/squads.component';
import { CoachesComponent } from './components/club/coaches/coaches.component';
import { NewsComponent } from './components/news/news.component';
import { AboutClubComponent } from './components/club/about-club/about-club.component';
import { HistoryComponent } from './components/club/history/history.component';
import { AchievementsComponent } from './components/club/achievements/achievements.component';
import { HomeArenaComponent } from './components/club/home-arena/home-arena.component';
import { FreeAgentsComponent } from './components/free-agents/free-agents.component';
import { YouthAcademyComponent } from './components/club/youth-academy/youth-academy.component';
import { AdministrationStaffComponent } from './components/club/administration-staff/administration-staff.component';
import { FreeAgentDetailsComponent } from './components/free-agents/free-agent-details/free-agent-details.component';
/* Components */

/* Dialog */
import { AddPlayerComponent } from "./dialog/add-player/add-player.component";
import { AddCoachComponent } from './dialog/add-coach/add-coach.component';
import { AngularMaterialModule } from 'src/app/angular-material.module';
/* Dialog */


@NgModule({
	declarations: [
		DashboardClubComponent,
		HeaderComponent,
		AsideComponent,
		FooterComponent,
		HomeComponent,
		PostComponent,
		ContactsComponent,
		SquadsComponent,
		CoachesComponent,
		NewsComponent,
		AboutClubComponent,
		HistoryComponent,
		AchievementsComponent,
		HomeArenaComponent,
		FreeAgentsComponent,
		YouthAcademyComponent,
		AdministrationStaffComponent,
		FreeAgentDetailsComponent,
		/* Dialog Components */
		AddPlayerComponent,
		AddCoachComponent,
		/* Dialog Components */
	],
	imports: [
		CommonModule,
		FormsModule,
		AngularMaterialModule,
		DashboardClubRoutingModule,
		RouterModule,
	],
	exports: [
	],
	schemas: [
		CUSTOM_ELEMENTS_SCHEMA
	],
})
export class DashboardClubModule { }
