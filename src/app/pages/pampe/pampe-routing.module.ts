import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PAMPEPage } from './pampe.page';

const routes: Routes = [
  {
    path: '',
    component: PAMPEPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PAMPEPageRoutingModule {}
