import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { DashboardClubComponent } from './dashboard-club.component';
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

const routes: Routes = [
	{
		path: '', component: DashboardClubComponent, children: [
			{ path: 'home', component: HomeComponent },
			{ path: 'news', component: NewsComponent },
			{ path: 'contacts', component: ContactsComponent },
			{ path: 'free-agents', component: FreeAgentsComponent },
			{ path: 'about', component: AboutClubComponent },
			{ path: 'history', component: HistoryComponent },
			{ path: 'achievements', component: AchievementsComponent },
			{ path: 'home-arena', component: HomeArenaComponent },
			{ path: 'squads', component: SquadsComponent },
			{ path: 'coaches', component: CoachesComponent },
			{ path: 'youth-academy', component: YouthAcademyComponent },
			{ path: 'administration', component: AdministrationStaffComponent },
		]
	}
]

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class DashboardClubRoutingModule { }
