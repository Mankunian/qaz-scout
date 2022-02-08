import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoachService } from 'src/app/services/coach.service';

@Component({
	selector: 'app-coach-details',
	templateUrl: './coach-details.component.html',
	styleUrls: ['./coach-details.component.scss']
})
export class CoachDetailsComponent implements OnInit {
	coachInfo: any;

	constructor(private route: ActivatedRoute, private coachService: CoachService) { }

	ngOnInit(): void {
		let coachId = this.route.snapshot.paramMap.get('id');
		this.getCoachById(coachId);
	}

	getCoachById(coachId: string | null) {
		this.coachService.getCoachInfo(coachId).subscribe(response => {
			console.log(response)
			response.forEach((element: any) => {
				if (element.id == coachId) {
					this.coachInfo = element;
				}
			});
		})
	}

}
