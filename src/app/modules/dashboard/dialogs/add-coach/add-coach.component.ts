import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
	selector: 'app-add-coach',
	templateUrl: './add-coach.component.html',
	styleUrls: ['./add-coach.component.scss']
})
export class AddCoachComponent implements OnInit {
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
