import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LeagueService } from 'src/app/services/league.service';
import { NotificationService } from 'src/app/services/notification.service';
import { PositionService } from 'src/app/services/position.service';
import { UserService } from 'src/app/services/user.service';

@Component({
	selector: 'app-free-agents',
	templateUrl: './free-agents.component.html',
	styleUrls: ['./free-agents.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class FreeAgentsComponent implements OnInit {
	filterForm!: FormGroup;
	positions: any;
	ageRange: any;
	leagues: any;
	freeAgents: any;


	constructor(
		private router: Router,
		private notificationService: NotificationService,
		private leagueService: LeagueService,
		private userService: UserService,
		private positionService: PositionService
	) { }

	ngOnInit(): void {
		this.getFilterForm();
		this.getPositions();
		this.getAgeRange();
		this.getLeagues();
		this.getFreeAgents();
	}
	getFilterForm() {
		this.filterForm = new FormGroup({
			"position": new FormControl(""),
			"age": new FormControl(""),
			"league": new FormControl("")
		})
	}
	getPositions() {
		this.positionService.getPositions().subscribe(response => {
			this.positions = response;
		})
	}

	getAgeRange() {
		this.ageRange = [
			{ id: 1, range: '10-15' },
			{ id: 2, range: '15-27' },
			{ id: 3, range: '27-40' },
			{ id: 4, range: '40+' }
		];
	}

	getFreeAgents() {
		this.userService.getFreeAgents().subscribe((response: any) => {
			console.log(response)
			this.freeAgents = response;
		})
	}

	getLeagues() {
		this.leagueService.getLeagues().subscribe(response => {
			console.log(response);
			this.leagues = response;
		})
	}

	invite(item: any) { }

	reject(item: any) { }

	searchByFilter() {
		console.log(this.filterForm.value)
	}

	clearFilter() {
		this.filterForm.reset();
	}


}
