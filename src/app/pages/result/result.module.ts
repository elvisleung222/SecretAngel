import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';
import { ResultComponent } from './result.component';
import { ResultsComponent } from './tabs/results/results.component';
import { RecordsComponent } from './tabs/records/records.component';
import { SelectedsComponent } from './tabs/selecteds/selecteds.component';
import { ResultRoutingModule } from './result-routing.module';
import { ParticipantCardModule } from '../components/participant-card/participant-card.module';

@NgModule({
	imports: [
		ThemeModule,
		ResultRoutingModule,
		ParticipantCardModule,
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
