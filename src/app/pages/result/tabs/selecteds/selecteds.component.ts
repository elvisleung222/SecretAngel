import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'selecteds',
	templateUrl: './selecteds.component.html',
	styleUrls: ['./selecteds.component.scss'],
})
export class SelectedsComponent implements OnInit {

	protected selected_limit;
	protected selected_number = 0;
	protected selecteds;

	constructor() {
		this.selected_limit = 5;

		// TODO Get the selected data from server
		this.selecteds = [
			{id: 1234},
			{id: 1235},
			{id: 1236},
		];
		this.selected_number = this.selecteds.length;
	}

	ngOnInit() {
	}

}
