import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';
import { BookmarkComponent } from './bookmark.component';

@NgModule({
  imports: [
    ThemeModule,
  ],
  declarations: [
    BookmarkComponent,
  ],
})
export class BookmarkModule { }
