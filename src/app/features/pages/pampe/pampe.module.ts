import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { PampePageRoutingModule } from './pampe-routing.module';

import { PampePage } from './pampe.page';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { QuillModule } from 'ngx-quill';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PampePageRoutingModule,
    QuillModule
  ],
  declarations: [PampePage]
})
export class PampePageModule {}
