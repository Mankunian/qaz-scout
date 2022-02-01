import { Injectable } from '@angular/core';
import { TokenStorageService } from './token-storage.service';

@Injectable({
	providedIn: 'root'
})
export class RoleService {

	constructor(private tokenStorageService: TokenStorageService) { }

	public getRoleOfCurrentUser(): any {
		let loggedUser = this.tokenStorageService.getUser();
		if (loggedUser.role.code == 'admin') {
			return 'admin';
		} else if (loggedUser.role.code == 'club') {
			return 'club';
		} else if (loggedUser.role.code == 'player') {
			return 'player';
		} else if (loggedUser.role.code == 'coach') {
			return 'coach';
		}
		return '';
	}
}
