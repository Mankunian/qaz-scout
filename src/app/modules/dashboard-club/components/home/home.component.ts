import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddPlayerComponent } from "../../dialog/add-player/add-player.component";
@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
	card_icon: string = 'emoji-heart-eyes-fill';
	win_rate: number = 100;
	teams: any;

	constructor(public dialog: MatDialog) { }

	ngOnInit(): void {
		this.getTeamList();
	}
	getTeamList() {
		this.teams = [
			{ id: 11314, fullName: 'Алишер Келгенбай', position: 'Нападающий', contract_until: '01.05.2025', mood: 'success' },
			{ id: 12113, fullName: 'Биржан Оразов', position: 'Универсал', contract_until: '01.05.2021', mood: 'warning' },
		]
	}
	// bi-emoji-frown-fill

	changeWinRate(value: string) {
		if (value == 'good') {
			this.card_icon = 'emoji-smile-fill';
			this.win_rate = 97;
		} else if (value == 'medium') {
			this.card_icon = 'emoji-neutral-fill';
			this.win_rate = 64;
		} else {
			this.card_icon = 'emoji-frown-fill';
			this.win_rate = 32
		}
	}

	openAddPlayerDialog() {
		const dialogRef = this.dialog.open(AddPlayerComponent);

		dialogRef.afterClosed().subscribe(result => {
			console.log(`Dialog result: ${result}`);
		});
	}
}
