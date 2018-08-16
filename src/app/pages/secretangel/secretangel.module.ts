import { NgModule } from '@angular/core';


import { ThemeModule } from '../../@theme/theme.module';
import { SecretAngelComponent } from './secretangel.component';


@NgModule({
  imports: [
    ThemeModule,
  ],
  declarations: [
    SecretAngelComponent,
  ],
})
export class SecretAngelModule { }
