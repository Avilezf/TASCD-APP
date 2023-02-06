import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import { ShowHidePasswordComponent } from './components/show-hide-password/show-hide-password.component';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [ShowHidePasswordComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [ShowHidePasswordComponent]
})
export class SharedModule { }
