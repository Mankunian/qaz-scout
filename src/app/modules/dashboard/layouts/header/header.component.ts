import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { UserService } from 'src/app/services/user.service';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
	private stateClassRef: any = {
		normal: "",
		collapsed: "toggle-sidebar"
	}
	private state = "normal"; // normal or collapsed
	profile: any;

	constructor(
		private el: ElementRef, private rd: Renderer2,
		private tokenStorage: TokenStorageService,
		private userService: UserService
	) { }

	ngOnInit(): void {
		this.getProfile();
	}

	getProfile() {
		let profile = this.tokenStorage.getUser();
		this.userService.getUserById(profile.id).subscribe(response => {
			this.profile = response;
		})
	}

	toggleSidebar() {
		this.state = this.state === "normal" ? "collapsed" : "normal";
		// do the toggling.
		this.el.nativeElement.closest('body').className = this.stateClassRef[this.state];
	}

}
