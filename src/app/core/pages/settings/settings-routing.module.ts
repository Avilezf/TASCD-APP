import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SettingsPage } from './settings.page';
import { LettersComponent } from '../../components/letters/letters.component';
import { CommentComponent } from '../../components/comment/comment.component';
import { ThemesComponent } from '../../components/themes/themes.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: SettingsPage },
      { path: 'letters', component: LettersComponent },
      { path: 'comments', component: CommentComponent },
      { path: 'themes', component: ThemesComponent },
      { path: '**', redirectTo: '' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingsPageRoutingModule {}
