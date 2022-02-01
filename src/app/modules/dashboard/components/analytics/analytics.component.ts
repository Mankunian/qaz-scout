import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-analytics',
	templateUrl: './analytics.component.html',
	styleUrls: ['./analytics.component.scss']
})
export class AnalyticsComponent implements OnInit {
	data: any;
	barData: any;
	barOptions: any;

	polarAreaData: any;
	polarAreaOptions: any;

	radarData: any;
	radarOptions: any;

	lineStylesData: any;
	lineStylesOptions: any;

	constructor() {
		this.getVerticalChart();
		this.getPolarAreaChart();
		this.getRadarChart();
		this.getLineStylesOptions();
	}

	getLineStylesOptions() {
		this.lineStylesData = {
			labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
			datasets: [
				{
					label: 'First Dataset',
					data: [65, 59, 80, 81, 56, 55, 40],
					fill: false,
					tension: .4,
					borderColor: '#42A5F5'
				},
				{
					label: 'Second Dataset',
					data: [28, 48, 40, 19, 86, 27, 90],
					fill: false,
					borderDash: [5, 5],
					tension: .4,
					borderColor: '#66BB6A'
				},
				{
					label: 'Third Dataset',
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

	getRadarChart() {
		this.radarData = {
			labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
			datasets: [
				{
					label: 'My First dataset',
					backgroundColor: 'rgba(179,181,198,0.2)',
					borderColor: 'rgba(179,181,198,1)',
					pointBackgroundColor: 'rgba(179,181,198,1)',
					pointBorderColor: '#fff',
					pointHoverBackgroundColor: '#fff',
					pointHoverBorderColor: 'rgba(179,181,198,1)',
					data: [65, 59, 90, 81, 56, 55, 40]
				},
				{
					label: 'My Second dataset',
					backgroundColor: 'rgba(255,99,132,0.2)',
					borderColor: 'rgba(255,99,132,1)',
					pointBackgroundColor: 'rgba(255,99,132,1)',
					pointBorderColor: '#fff',
					pointHoverBackgroundColor: '#fff',
					pointHoverBorderColor: 'rgba(255,99,132,1)',
					data: [28, 48, 40, 19, 96, 27, 100]
				}
			]
		};

		this.radarOptions = {
			plugins: {
				legend: {
					labels: {
						color: '#495057'
					}
				}
			},
			scales: {
				r: {
					pointLabels: {
						color: '#495057',
					},
					grid: {
						color: '#ebedef',
					},
					angleLines: {
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
					11,
					16,
					7,
					3,
					14
				],
				backgroundColor: [
					"#42A5F5",
					"#66BB6A",
					"#FFA726",
					"#26C6DA",
					"#7E57C2"
				],
				label: 'My dataset'
			}],
			labels: [
				"Red",
				"Green",
				"Yellow",
				"Grey",
				"Blue"
			]
		};

		this.polarAreaOptions = {
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

	getVerticalChart() {
		this.barData = {
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

		this.barOptions = {
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
