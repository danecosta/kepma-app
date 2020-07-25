import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NovoVinculoPage } from './novo-vinculo.page';

const routes: Routes = [
  {
    path: '',
    component: NovoVinculoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NovoVinculoPageRoutingModule {}
