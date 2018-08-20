import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { SecretAngelModule } from './secretangel/secretangel.module';
import { BookmarkModule } from './bookmark/bookmark.module';
import { ResultModule } from './result/result.module';
import { ProfileModule } from './profile/profile.module';
import { PagesRoutingModule } from './pages-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';

const PAGES_COMPONENTS = [
	PagesComponent,
];

@NgModule({
	imports: [
		PagesRoutingModule,
		ThemeModule,
		SecretAngelModule,
		BookmarkModule,
		ResultModule,
		ProfileModule,
		MiscellaneousModule,
	],
	declarations: [
		...PAGES_COMPONENTS,
	],
})
export class PagesModule {
}
