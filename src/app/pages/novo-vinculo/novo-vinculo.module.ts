import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NovoVinculoPageRoutingModule } from './novo-vinculo-routing.module';

import { NovoVinculoPage } from './novo-vinculo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NovoVinculoPageRoutingModule
  ],
  declarations: [NovoVinculoPage]
})
export class NovoVinculoPageModule {}
