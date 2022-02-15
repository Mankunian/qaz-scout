import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

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
		private tokenStorage: TokenStorageService
	) { }

	ngOnInit(): void {
		this.getProfile();
	}

	getProfile() {
		// this.authService.getProfileService().subscribe(response => {
		// 	console.log(response)
		// 	this.profile = response;
		// })
		this.profile = this.tokenStorage.getUser();
	}

	toggleSidebar() {
		this.state = this.state === "normal" ? "collapsed" : "normal";
		// do the toggling.
		this.el.nativeElement.closest('body').className = this.stateClassRef[this.state];
	}

}
