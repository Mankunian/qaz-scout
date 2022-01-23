import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnalyticsComponent } from './components/analytics/analytics.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { ClubsComponent } from './components/dictionary/clubs/clubs.component';
import { RegionsComponent } from './components/dictionary/regions/regions.component';
import { RolesComponent } from './components/dictionary/roles/roles.component';
import { UsersComponent } from './components/dictionary/users/users.component';
import { EmailComponent } from './components/email/email.component';
import { FaqComponent } from './components/faq/faq.component';
import { HomeComponent } from './components/home/home.component';
import { IconsBootstrapComponent } from './components/icons/icons-bootstrap/icons-bootstrap.component';
import { IconsBoxiconsComponent } from './components/icons/icons-boxicons/icons-boxicons.component';
import { IconsRemixComponent } from './components/icons/icons-remix/icons-remix.component';
import { NewsComponent } from './components/news/news.component';
import { ProfileComponent } from './components/profile/profile.component';
import { StatsComponent } from './components/stats/stats.component';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
	{
		path: '', component: DashboardComponent, children: [
			{ path: 'home', component: HomeComponent },
			{ path: 'analytics', component: AnalyticsComponent },
			{ path: 'stats', component: StatsComponent },
			{ path: 'email', component: EmailComponent },
			{ path: 'news', component: NewsComponent },
			{ path: 'contacts', component: ContactsComponent },
			{ path: 'faq', component: FaqComponent },
			{ path: 'faq', component: FaqComponent },
			{ path: 'icons/bootstrap', component: IconsBootstrapComponent },
			{ path: 'icons/boxicons', component: IconsBoxiconsComponent },
			{ path: 'icons/remix', component: IconsRemixComponent },
			{ path: 'profile', component: ProfileComponent },
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
