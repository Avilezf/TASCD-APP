import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { QtddPageRoutingModule } from './qtdd-routing.module';

import { QtddPage } from './qtdd.page';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QtddPageRoutingModule
  ],
  declarations: [QtddPage]
})
export class QtddPageModule {}
