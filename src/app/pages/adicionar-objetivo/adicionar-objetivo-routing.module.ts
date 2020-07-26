import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdicionarObjetivoPage } from './adicionar-objetivo.page';

const routes: Routes = [
  {
    path: '',
    component: AdicionarObjetivoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdicionarObjetivoPageRoutingModule {}
