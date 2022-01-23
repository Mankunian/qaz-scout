import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { HttpService } from '../../service/http.service'

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

	constructor(private el: ElementRef, private rd: Renderer2, private http: HttpService) { }

	ngOnInit(): void {
		this.getProfile();
	}

	getProfile() {
		this.http.getProfileCoachService().subscribe(response => {
			console.log(response)
			this.profile = response;
		})
	}

	toggleSidebar() {
		this.state = this.state === "normal" ? "collapsed" : "normal";
		// do the toggling.
		this.el.nativeElement.closest('body').className = this.stateClassRef[this.state];
	}

}
