import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
	constructor(@Inject(DOCUMENT) private document: Document) { }

	ngOnInit(): void {
		this.document.body.classList.add('');
	}

}
