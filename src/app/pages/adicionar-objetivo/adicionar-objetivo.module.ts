import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdicionarObjetivoPageRoutingModule } from './adicionar-objetivo-routing.module';

import { AdicionarObjetivoPage } from './adicionar-objetivo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    AdicionarObjetivoPageRoutingModule
  ],
  declarations: [AdicionarObjetivoPage]
})
export class AdicionarObjetivoPageModule { }
