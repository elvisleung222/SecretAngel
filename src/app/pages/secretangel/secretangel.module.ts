import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';
import { SecretAngelComponent } from './secretangel.component';
import { ParticipantCardComponent } from '../components/participant-card/participant-card.component';
// import { ParticipantCardModule } from '../components/participant-card/participant-card.module';
@NgModule({
  imports: [
    ThemeModule,
    //ParticipantCardModule
  ],
  declarations: [
    SecretAngelComponent,
    ParticipantCardComponent,
  ],
})
export class SecretAngelModule { }
