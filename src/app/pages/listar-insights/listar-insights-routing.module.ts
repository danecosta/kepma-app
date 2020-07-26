import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListarInsightsPage } from './listar-insights.page';

const routes: Routes = [
  {
    path: '',
    component: ListarInsightsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListarInsightsPageRoutingModule {}
