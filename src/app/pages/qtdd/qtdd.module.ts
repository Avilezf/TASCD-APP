import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QTDDPageRoutingModule } from './qtdd-routing.module';

import { QTDDPage } from './qtdd.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QTDDPageRoutingModule
  ],
  declarations: [QTDDPage]
})
export class QTDDPageModule {}
