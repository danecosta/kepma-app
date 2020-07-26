import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NovoFinanciamentoPage } from './novo-financiamento.page';

const routes: Routes = [
  {
    path: '',
    component: NovoFinanciamentoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NovoFinanciamentoPageRoutingModule {}
