import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SettingsPageRoutingModule } from './settings-routing.module';

import { SettingsPage } from './settings.page';
import { LettersComponent } from '../../components/letters/letters.component';
import { CommentComponent } from '../../components/comment/comment.component';
import { ThemesComponent } from '../../components/themes/themes.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SettingsPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [SettingsPage, LettersComponent, CommentComponent, ThemesComponent]
})
export class SettingsPageModule {}
