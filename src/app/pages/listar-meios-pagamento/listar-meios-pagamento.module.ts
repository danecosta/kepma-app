import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListarMeiosPagamentoPageRoutingModule } from './listar-meios-pagamento-routing.module';

import { ListarMeiosPagamentoPage } from './listar-meios-pagamento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListarMeiosPagamentoPageRoutingModule
  ],
  declarations: [ListarMeiosPagamentoPage]
})
export class ListarMeiosPagamentoPageModule {}
