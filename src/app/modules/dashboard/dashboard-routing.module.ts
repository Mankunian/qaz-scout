import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnalyticsComponent } from './components/analytics/analytics.component';
import { AboutClubComponent } from './components/club/about-club/about-club.component';
import { AdministrationStaffComponent } from './components/club/administration-staff/administration-staff.component';
import { CoachesComponent } from './components/club/coaches/coaches.component';
import { FixturesComponent } from './components/club/fixtures/fixtures.component';
import { SquadsComponent } from './components/club/squads/squads.component';
import { TableComponent } from './components/club/table/table.component';
import { YouthAcademyComponent } from './components/club/youth-academy/youth-academy.component';
import { CoachDetailsComponent } from './components/coach-details/coach-details.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { ClubsComponent } from './components/dictionary/clubs/clubs.component';
import { RegionsComponent } from './components/dictionary/regions/regions.component';
import { RolesComponent } from './components/dictionary/roles/roles.component';
import { UsersComponent } from './components/dictionary/users/users.component';
import { EmailComponent } from './components/email/email.component';
import { FaqComponent } from './components/faq/faq.component';
import { FreeAgentDetailsComponent } from './components/free-agents/free-agent-details/free-agent-details.component';
import { FreeAgentsComponent } from './components/free-agents/free-agents.component';
import { HomeComponent } from './components/home/home.component';
import { NewsDetailsComponent } from './components/news/news-details/news-details.component';
import { NewsComponent } from './components/news/news.component';
import { ProfileComponent } from './components/profile/profile.component';
import { StatsComponent } from './components/stats/stats.component';
import { TrainingCenterComponent } from './components/training-center/training-center.component';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
	{
		path: '', component: DashboardComponent, children: [

			{ path: 'home', component: HomeComponent },
			{ path: 'news', component: NewsComponent },
			{ path: 'news/:id', component: NewsDetailsComponent },
			{ path: 'stats', component: StatsComponent },
			{ path: 'faq', component: FaqComponent },
			{ path: 'contacts', component: ContactsComponent },
			{ path: 'profile', component: ProfileComponent },
			{ path: 'email', component: EmailComponent },
			{ path: 'analytics', component: AnalyticsComponent },
			{ path: 'free-agents', component: FreeAgentsComponent },
			{ path: 'free-agent/:id', component: FreeAgentDetailsComponent },
			{ path: 'training-center', component: TrainingCenterComponent },

			{ path: 'club/:id/about', component: AboutClubComponent },
			{ path: 'club/squads', component: SquadsComponent },
			{ path: 'club/youth', component: YouthAcademyComponent },
			{ path: 'club/coaches', component: CoachesComponent },
			{ path: 'club/administration-staff', component: AdministrationStaffComponent },
			{ path: 'club/table', component: TableComponent },
			{ path: 'club/fixtures', component: FixturesComponent },

			{ path: 'coach/:id', component: CoachDetailsComponent },

			{ path: 'dictionary/clubs', component: ClubsComponent },
			{ path: 'dictionary/regions', component: RegionsComponent },
			{ path: 'dictionary/roles', component: RolesComponent },
			{ path: 'dictionary/users', component: UsersComponent },
		]
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class DashboardRoutingModule { }
