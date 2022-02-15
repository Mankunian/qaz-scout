import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class ErrorHandlerService {

	constructor() { }

	handleError(message: any) {
		alert(message)
	}
}
