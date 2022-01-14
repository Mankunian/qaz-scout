import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { ClubsComponent } from './dashboard/dictionary/clubs/clubs.component';
import { RegionsComponent } from './dashboard/dictionary/regions/regions.component';
import { RolesComponent } from './dashboard/dictionary/roles/roles.component';
import { UsersComponent } from './dashboard/dictionary/users/users.component';
import { MainComponent } from './dashboard/layouts/main/main.component';
import { AnalyticsComponent } from './dashboard/pages/analytics/analytics.component';
import { ContactsComponent } from './dashboard/pages/contacts/contacts.component';
import { FaqComponent } from './dashboard/pages/faq/faq.component';
import { IconsBootstrapComponent } from './dashboard/pages/icons/icons-bootstrap/icons-bootstrap.component';
import { IconsBoxiconsComponent } from './dashboard/pages/icons/icons-boxicons/icons-boxicons.component';
import { IconsRemixComponent } from './dashboard/pages/icons/icons-remix/icons-remix.component';
import { ProfileComponent } from './dashboard/pages/profile/profile.component';

const routes: Routes = [
	{ path: '', component: MainComponent, pathMatch: 'full' },
	{ path: 'login', component: LoginComponent },
	{ path: 'dictionary/clubs', component: ClubsComponent },
	{ path: 'dictionary/regions', component: RegionsComponent },
	{ path: 'dictionary/roles', component: RolesComponent },
	{ path: 'dictionary/users', component: UsersComponent },
	{ path: 'icons/bootstrap', component: IconsBootstrapComponent },
	{ path: 'icons/boxicons', component: IconsBoxiconsComponent },
	{ path: 'icons/remix', component: IconsRemixComponent },
	{ path: 'analytics', component: AnalyticsComponent },
	{ path: 'faq', component: FaqComponent },
	{ path: 'profile', component: ProfileComponent },
	{ path: 'contacts', component: ContactsComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
