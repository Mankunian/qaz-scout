import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
	selector: 'app-add-player',
	templateUrl: './add-player.component.html',
	styleUrls: ['./add-player.component.scss'],
})
export class AddPlayerComponent implements OnInit {
	email = new FormControl('', [Validators.required, Validators.email]);
	constructor() { }

	ngOnInit(): void {
	}

	getErrorMessage() {
		if (this.email.hasError('required')) {
			return 'You must enter a value';
		}

		return this.email.hasError('email') ? 'Not a valid email' : '';
	}

}
