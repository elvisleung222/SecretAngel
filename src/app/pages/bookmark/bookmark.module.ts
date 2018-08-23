import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';
import { BookmarkComponent } from './bookmark.component';
import { ParticipantCardModule } from '../components/participant-card/participant-card.module';

@NgModule({
	imports: [
		ThemeModule,
		ParticipantCardModule,
	],
	declarations: [
		BookmarkComponent,
	],
})
export class BookmarkModule {
}
