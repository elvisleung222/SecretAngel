import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';
import { ResultComponent } from './result.component';
import { ResultsComponent } from './tabs/results/results.component';
import { RecordsComponent } from './tabs/records/records.component';
import { SelectedsComponent } from './tabs/selecteds/selecteds.component';

@NgModule({
	imports: [
		ThemeModule,
	],
	declarations: [
		ResultComponent,
		ResultsComponent,
		RecordsComponent,
		SelectedsComponent,
	],
})
export class ResultModule {
}
