import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PampePageRoutingModule } from './pampe-routing.module';

import { PampePage } from './pampe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PampePageRoutingModule
  ],
  declarations: [PampePage]
})
export class PampePageModule {}
