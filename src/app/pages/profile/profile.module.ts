import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';
import { ProfileComponent } from './profile.component';
import { ParticipantCardModule } from '../components/participant-card/participant-card.module';

@NgModule({
  imports: [
    ThemeModule,
    ParticipantCardModule
  ],
  declarations: [
    ProfileComponent
  ],
})
export class ProfileModule { }
