import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NovoFinanciamentoPageRoutingModule } from './novo-financiamento-routing.module';

import { NovoFinanciamentoPage } from './novo-financiamento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    NovoFinanciamentoPageRoutingModule
  ],
  declarations: [NovoFinanciamentoPage]
})
export class NovoFinanciamentoPageModule { }
