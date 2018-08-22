import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';
import { ProfileComponent } from './profile.component';
import { ParticipantCardModule } from '../components/participant-card/participant-card.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    ThemeModule,
    ParticipantCardModule,
    HttpClientModule
  ],
  declarations: [
    ProfileComponent
  ],
})
export class ProfileModule { }
