import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';
import { ShowHidePasswordComponent } from "../../../shared/components/show-hide-password/show-hide-password.component";

@NgModule({
    declarations: [LoginPage, ShowHidePasswordComponent],
    imports: [
      CommonModule,
      FormsModule,
      IonicModule,
      LoginPageRoutingModule,
      ReactiveFormsModule,
      FormsModule
    ]
})
export class LoginPageModule {}
