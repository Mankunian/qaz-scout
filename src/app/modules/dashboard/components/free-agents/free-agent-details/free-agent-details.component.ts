import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
	selector: 'app-free-agent-details',
	templateUrl: './free-agent-details.component.html',
	styleUrls: ['./free-agent-details.component.scss']
})
export class FreeAgentDetailsComponent implements OnInit {
	profile: any;
	safeURL: any;

	constructor(
		private route: ActivatedRoute,
		private userService: UserService,
		private _sanitizer: DomSanitizer) {
		let userId = this.route.snapshot.paramMap.get('id');
		this.getUserById(userId);
	}

	getUserById(userId: any) {
		this.userService.getUserById(userId).subscribe(response => {
			console.log(response)
			this.profile = response;
			this.profile.fullName = this.setFullName();
			this.profile?.videos?.forEach((element: any) => {
				console.log(element)
				this.safeURL = this._sanitizer.bypassSecurityTrustResourceUrl(element);
			});
		})
	}

	setFullName(): string {
		return this.profile.lastname + ' ' + this.profile.firstname;
	}

	ngOnInit(): void {
	}

}
