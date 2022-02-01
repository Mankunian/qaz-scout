import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-analytics',
	templateUrl: './analytics.component.html',
	styleUrls: ['./analytics.component.scss']
})
export class AnalyticsComponent implements OnInit {
	data: any;
	basicData: any;
	basicOptions: { plugins: { legend: { labels: { color: string; }; }; }; scales: { x: { ticks: { color: string; }; grid: { color: string; }; }; y: { ticks: { color: string; }; grid: { color: string; }; }; }; };

	constructor() {
		this.basicData = {
			labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
			datasets: [
				{
					label: 'My First dataset',
					backgroundColor: '#42A5F5',
					data: [65, 59, 80, 81, 56, 55, 40]
				},
				{
					label: 'My Second dataset',
					backgroundColor: '#FFA726',
					data: [28, 48, 40, 19, 86, 27, 90]
				}
			]
		};

		this.basicOptions = {
			plugins: {
				legend: {
					labels: {
						color: '#000'
					}
				}
			},
			scales: {
				x: {
					ticks: {
						color: '#000'
					},
					grid: {
						color: 'rgba(255,255,255,0.2)'
					}
				},
				y: {
					ticks: {
						color: '#000'
					},
					grid: {
						color: 'rgba(255,255,255,0.2)'
					}
				}
			}
		};
	}

	ngOnInit(): void {

	}

}
