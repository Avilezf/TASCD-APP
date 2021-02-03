import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StadisticsPage } from './stadistics.page';

const routes: Routes = [
  {
    path: '',
    component: StadisticsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StadisticsPageRoutingModule {}
