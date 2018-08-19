import { Component, OnDestroy } from '@angular/core';

@Component({
	selector: 'ngx-result',
	templateUrl: './result.component.html',
})
export class ResultComponent implements OnDestroy {
	// TODO tabIcon not working
	tabs = [
		{
			title: '心儀對象',
			route: '/result/selected',
			icon: 'nb-person',
			responsive: true,
		},
		{
			title: '配對結果',
			route: '/result/results',
			icon: 'nb-person',
			responsive: true,
		},
		{
			title: '配對紀錄',
			route: '/result/records',
			icon: 'nb-person',
			responsive: true,
		}
	];

	constructor() {
	}

	ngOnDestroy() {
	}
}
