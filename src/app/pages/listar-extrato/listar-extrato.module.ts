import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListarExtratoPageRoutingModule } from './listar-extrato-routing.module';

import { ListarExtratoPage } from './listar-extrato.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListarExtratoPageRoutingModule
  ],
  declarations: [ListarExtratoPage]
})
export class ListarExtratoPageModule {}
