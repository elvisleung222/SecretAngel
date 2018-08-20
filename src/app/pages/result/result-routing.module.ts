import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { ResultComponent } from './result.component';
import { SelectedsComponent } from './tabs/selecteds/selecteds.component';
import { ResultsComponent } from './tabs/results/results.component';
import { RecordsComponent } from './tabs/records/records.component';

const routes: Routes = [{
	path: '',
	component: ResultComponent,
	children: [
		{
			path: 'selected',
			component: SelectedsComponent,
		},
		{
			path: 'results',
			component: ResultsComponent,
		},
		{
			path: 'records',
			component: RecordsComponent,
		},
		{
			path: '',
			redirectTo: 'selected',
			pathMatch: 'full',
		},
	],
}];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class ResultRoutingModule {
}
