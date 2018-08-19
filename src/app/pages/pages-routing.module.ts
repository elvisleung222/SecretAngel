import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { SecretAngelComponent } from './secretangel/secretangel.component';
import { BookmarkComponent } from './bookmark/bookmark.component';
import { ResultComponent } from './result/result.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'sa',
      component: SecretAngelComponent,
    },
    {
      path: 'bookmark',
      component: BookmarkComponent,
    },
    {
      path: 'result',
      component: ResultComponent,
    },
    {
      path: 'profile',
      component: ProfileComponent,
    },
    {
      path: '',
      redirectTo: 'sa',
      pathMatch: 'full',
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
