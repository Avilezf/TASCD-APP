import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChangePasswordPageRoutingModule } from './change-password-routing.module';

import { ChangePasswordPage } from './change-password.page';
import { SharedModule } from "../../../shared/shared.module";

@NgModule({
    declarations: [ChangePasswordPage],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ChangePasswordPageRoutingModule,
        ReactiveFormsModule,
        SharedModule
    ]
})
export class ChangePasswordPageModule {}
