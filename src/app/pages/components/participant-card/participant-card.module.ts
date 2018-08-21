import { NgModule } from '@angular/core';
import { ThemeModule } from '../../../@theme/theme.module';
import { ParticipantCardComponent } from './participant-card.component';

@NgModule({
  imports: [
    ThemeModule,
  ],
  declarations: [
    ParticipantCardComponent
  ],
  exports: [
    ParticipantCardComponent,
  ]
})
export class ParticipantCardModule { }
