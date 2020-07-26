import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VisualizarMetaPage } from './visualizar-meta.page';

const routes: Routes = [
  {
    path: '',
    component: VisualizarMetaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VisualizarMetaPageRoutingModule {}
