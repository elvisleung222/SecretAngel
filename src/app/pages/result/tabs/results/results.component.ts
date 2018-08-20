import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
	selector: 'results',
	templateUrl: './results.component.html',
	styleUrls: ['./results.component.scss'],
})
export class ResultsComponent implements OnInit {
	protected results;
	protected admirers;
	protected isResultStage = false;

	protected admirerId = null;

	constructor(
		private modalService: NgbModal,
	) {
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
		];

		// TODO Get the current stage
		this.isResultStage = true;
	}

	ngOnInit() {
	}

	async getAdmirerTel(content, id) {
		this.admirerId = id;
		try {
			let result = await this.modalService.open(content).result;
			console.log(result);

			// TODO Get the admirer tel from server
			console.log('Confirm to get ' + id + ' tel');
		} catch (e) {
			console.log(e);
		}
		this.admirerId = null;
	}
}
