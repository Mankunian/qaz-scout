import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';



import { DashboardCoachRoutingModule } from './dashboard-coach-routing.module';

/* Components */
import { DashboardCoachComponent } from './dashboard-coach.component';
import { AsideComponent } from "../dashboard-coach/layouts/aside/aside.component";
import { FooterComponent } from "../dashboard-coach/layouts/footer/footer.component";
import { HeaderComponent } from "../dashboard-coach/layouts/header/header.component";
import { AngularMaterialModule } from 'src/app/angular-material.module';
import { HomeComponent } from './components/home/home.component';
import { IdeasComponent } from './components/ideas/ideas.component';
import { FaqComponent } from './components/faq/faq.component';
import { NewsComponent } from './components/news/news.component';
/* Components */


@NgModule({
	declarations: [
		DashboardCoachComponent,
		AsideComponent,
		FooterComponent,
		HeaderComponent,
  HomeComponent,
  IdeasComponent,
  FaqComponent,
  NewsComponent
	],
	imports: [
		CommonModule,
		DashboardCoachRoutingModule,
		FormsModule,
		AngularMaterialModule,
		RouterModule,
	],
	exports: [],
	schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DashboardCoachModule { }
