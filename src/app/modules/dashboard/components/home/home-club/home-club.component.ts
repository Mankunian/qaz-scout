import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-home-club',
	templateUrl: './home-club.component.html',
	styleUrls: ['./home-club.component.scss']
})
export class HomeClubComponent implements OnInit {
	clubTodos: any;
	lineStylesData: any;
	lineStylesOptions: any;

	polarAreaOptions: any;
	polarAreaData: any;
	constructor() { }

	ngOnInit(): void {
		this.getTodos();
		this.getLineStylesOptions();
		this.getPolarAreaChart();
	}
	getTodos() {
		this.clubTodos = [
			{ "id": 1, "checked": true, "desc": 'Количество игроков' },
			{ "id": 2, "checked": true, "desc": 'Количество тренеров' },
			{ "id": 3, "checked": true, "desc": 'Количество администрации' },
			{ "id": 4, "checked": true, "desc": 'Количество свободных агентов' },
			{ "id": 5, "checked": true, "desc": 'Новости в боковом меню справа' },
			{ "id": 6, "checked": true, "desc": 'Снизу аналитика (line styles) форма клуба каждую неделю, либо каждый месяц' },
			{ "id": 7, "checked": true, "desc": 'Pie chart аналитика сколько игроков на каждой позиции (3 вратаря, 4 защитника, 5 нападающих)' },
		]
	}

	getLineStylesOptions() {
		this.lineStylesData = {
			labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
			datasets: [
				{
					label: '2020/2021',
					data: [65, 59, 80, 81, 56, 55, 40],
					fill: false,
					tension: .4,
					borderColor: '#42A5F5'
				},
				{
					label: '2021/2022',
					data: [0, 15, 17, 25, 33, 48, 56],
					fill: false,
					borderDash: [5, 5],
					tension: .4,
					borderColor: '#66BB6A'
				},
				{
					label: '2019/2020',
					data: [12, 51, 62, 33, 21, 62, 45],
					fill: true,
					borderColor: '#FFA726',
					tension: .4,
					backgroundColor: 'rgba(255,167,38,0.2)'
				}
			]
		};

		this.lineStylesOptions = {
			plugins: {
				legend: {
					labels: {
						color: '#495057'
					}
				}
			},
			scales: {
				x: {
					ticks: {
						color: '#495057'
					},
					grid: {
						color: '#ebedef'
					}
				},
				y: {
					ticks: {
						color: '#495057'
					},
					grid: {
						color: '#ebedef'
					}
				}
			}
		}
	}

	getPolarAreaChart() {
		this.polarAreaData = {
			datasets: [{
				data: [
					3,
					4,
					2,
					5,
				],
				backgroundColor: [
					"#42A5F5",
					"#66BB6A",
					"#FFA726",
					"#26C6DA",
					// "#7E57C2"
				],
				label: 'My dataset'
			}],
			labels: [
				"Нападающие",
				"Защитники",
				"Вратари",
				"Универсалы",
			]
		};

		this.polarAreaOptions = {
			responsive: false,
			// maintainAspectRatio: false,
			plugins: {
				legend: {
					labels: {
						color: '#495057'
					}
				}
			},
			scales: {
				r: {
					grid: {
						color: '#ebedef'
					}
				}
			}
		}
	}

}
