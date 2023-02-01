import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QtddPage } from './qtdd.page';

const routes: Routes = [
  {
    path: '',
    component: QtddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QtddPageRoutingModule {}
