import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QTDDPage } from './qtdd.page';

const routes: Routes = [
  {
    path: '',
    component: QTDDPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QTDDPageRoutingModule {}
