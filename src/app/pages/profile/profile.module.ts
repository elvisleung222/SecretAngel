import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';
import { ProfileComponent } from './profile.component';

@NgModule({
  imports: [
    ThemeModule,
  ],
  declarations: [
    ProfileComponent,
  ],
})
export class ProfileModule { }
