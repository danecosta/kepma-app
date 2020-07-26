import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdicionarMetaPageRoutingModule } from './adicionar-meta-routing.module';

import { AdicionarMetaPage } from './adicionar-meta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    AdicionarMetaPageRoutingModule
  ],
  declarations: [AdicionarMetaPage]
})
export class AdicionarMetaPageModule { }
