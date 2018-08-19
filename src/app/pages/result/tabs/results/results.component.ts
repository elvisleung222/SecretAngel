import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'results',
	templateUrl: './results.component.html',
	styleUrls: ['./results.component.scss'],
})
export class ResultsComponent implements OnInit {
	protected results;
	protected admirers;

	constructor() {
		// TODO Get the match result from server
		this.results = [
			{id: 1234},
			{id: 1235},
			{id: 1236},
		];

		this.admirers = [
			{id: 2234},
			{id: 2235},
			{id: 2236},
		]
	}

	ngOnInit() {
	}

}
