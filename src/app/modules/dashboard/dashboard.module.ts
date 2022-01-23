import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from "../dashboard/dashboard.component";
import { AsideComponent } from './layouts/aside/aside.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { StatsComponent } from './components/stats/stats.component';
import { EmailComponent } from './components/email/email.component';
import { NewsComponent } from './components/news/news.component';

@NgModule({
	declarations: [
		DashboardComponent,
		AsideComponent,
		HeaderComponent,
		FooterComponent,
		HomeComponent,
  StatsComponent,
  EmailComponent,
  NewsComponent
	],
	imports: [
		CommonModule,
		DashboardRoutingModule,
		RouterModule
	]
})
export class DashboardModule { }
