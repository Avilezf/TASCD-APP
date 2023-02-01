import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QtddPageRoutingModule } from './qtdd-routing.module';

import { QtddPage } from './qtdd.page';

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
