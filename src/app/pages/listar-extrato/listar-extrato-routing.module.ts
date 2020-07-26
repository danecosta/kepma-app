import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListarExtratoPage } from './listar-extrato.page';

const routes: Routes = [
  {
    path: '',
    component: ListarExtratoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListarExtratoPageRoutingModule {}
