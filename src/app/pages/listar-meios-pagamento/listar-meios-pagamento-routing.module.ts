import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListarMeiosPagamentoPage } from './listar-meios-pagamento.page';

const routes: Routes = [
  {
    path: '',
    component: ListarMeiosPagamentoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListarMeiosPagamentoPageRoutingModule {}
