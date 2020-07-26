import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListarFinanciamentosPage } from './listar-financiamentos.page';

const routes: Routes = [
  {
    path: '',
    component: ListarFinanciamentosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListarFinanciamentosPageRoutingModule {}
