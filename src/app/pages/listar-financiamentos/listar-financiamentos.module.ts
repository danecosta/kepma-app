import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListarFinanciamentosPageRoutingModule } from './listar-financiamentos-routing.module';

import { ListarFinanciamentosPage } from './listar-financiamentos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListarFinanciamentosPageRoutingModule
  ],
  declarations: [ListarFinanciamentosPage]
})
export class ListarFinanciamentosPageModule {}
