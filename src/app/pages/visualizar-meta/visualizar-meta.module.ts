import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VisualizarMetaPageRoutingModule } from './visualizar-meta-routing.module';

import { VisualizarMetaPage } from './visualizar-meta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VisualizarMetaPageRoutingModule
  ],
  declarations: [VisualizarMetaPage]
})
export class VisualizarMetaPageModule {}
