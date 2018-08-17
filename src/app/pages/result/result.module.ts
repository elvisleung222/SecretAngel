import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';
import { ResultComponent } from './result.component';

@NgModule({
  imports: [
    ThemeModule,
  ],
  declarations: [
    ResultComponent,
  ],
})
export class ResultModule { }
