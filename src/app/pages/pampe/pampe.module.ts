import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PAMPEPageRoutingModule } from './pampe-routing.module';

import { PAMPEPage } from './pampe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PAMPEPageRoutingModule
  ],
  declarations: [PAMPEPage]
})
export class PAMPEPageModule {}
