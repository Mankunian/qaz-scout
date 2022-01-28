import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


/* Components */
import { FaqComponent } from './components/faq/faq.component';
import { FixturesResultsComponent } from './components/fixtures-results/fixtures-results.component';
import { HomeComponent } from './components/home/home.component';
import { IdeasComponent } from './components/ideas/ideas.component';
import { NewsComponent } from './components/news/news.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { TrainingComponent } from './components/training/training.component';
import { DashboardCoachComponent } from './dashboard-coach.component';
/* Components */

const routes: Routes = [
	{
		path: '', component: DashboardCoachComponent, children: [
			{ path: 'home', component: HomeComponent },
			{ path: 'news', component: NewsComponent },
			{ path: 'training', component: TrainingComponent },
			{ path: 'schedule', component: ScheduleComponent },
			{ path: 'fixtures', component: FixturesResultsComponent },
			{ path: 'ideas', component: IdeasComponent },
			{ path: 'faq', component: FaqComponent },
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class DashboardCoachRoutingModule { }
