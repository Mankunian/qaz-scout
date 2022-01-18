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

const routes: Routes = [
	{
		path: '', component: DashboardClubComponent, children: [
			{ path: 'home', component: HomeComponent },
			{ path: 'news', component: NewsComponent },
			{ path: 'contacts', component: ContactsComponent },
			{ path: 'club/about', component: AboutClubComponent },
			{ path: 'club/history', component: HistoryComponent },
			{ path: 'club/squads', component: SquadsComponent },
			{ path: 'club/coaches', component: CoachesComponent },
		]
	}
]

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class DashboardClubRoutingModule { }
