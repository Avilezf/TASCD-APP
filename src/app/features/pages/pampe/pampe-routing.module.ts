import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PampePage } from './pampe.page';

const routes: Routes = [
  {
    path: '',
    component: PampePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PampePageRoutingModule {}
