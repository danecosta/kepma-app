import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdicionarMetaPage } from './adicionar-meta.page';

const routes: Routes = [
  {
    path: '',
    component: AdicionarMetaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdicionarMetaPageRoutingModule {}
