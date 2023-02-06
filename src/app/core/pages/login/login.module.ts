import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';
import { ShowHidePasswordComponent } from "../../../shared/components/show-hide-password/show-hide-password.component";
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
    declarations: [LoginPage],
    imports: [
      CommonModule,
      FormsModule,
      IonicModule,
      LoginPageRoutingModule,
      ReactiveFormsModule,
      FormsModule,
      SharedModule
    ]
})
export class LoginPageModule {}
