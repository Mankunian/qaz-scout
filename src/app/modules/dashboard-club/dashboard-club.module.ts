import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
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
/* Components */

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
  HistoryComponent
	],
	imports: [
		CommonModule,
		DashboardClubRoutingModule,
		RouterModule
	]
})
export class DashboardClubModule { }
