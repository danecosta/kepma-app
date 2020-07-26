import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListarMetasPage } from './listar-metas.page';

const routes: Routes = [
  {
    path: '',
    component: ListarMetasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListarMetasPageRoutingModule {}
