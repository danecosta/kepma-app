import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdicionarCartaoPageRoutingModule } from './adicionar-cartao-routing.module';

import { AdicionarCartaoPage } from './adicionar-cartao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    AdicionarCartaoPageRoutingModule
  ],
  declarations: [AdicionarCartaoPage]
})
export class AdicionarCartaoPageModule { }
