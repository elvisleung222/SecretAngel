import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'records',
	templateUrl: './records.component.html',
	styleUrls: ['./records.component.scss'],
})
export class RecordsComponent implements OnInit {
	protected records;

	constructor() {
		// TODO Get the match records from server
		this.records = [
			{id: 3234},
			{id: 3235},
			{id: 3236},
		];
	}

	ngOnInit() {
	}

}
