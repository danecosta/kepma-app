import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListarInsightsPageRoutingModule } from './listar-insights-routing.module';

import { ListarInsightsPage } from './listar-insights.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListarInsightsPageRoutingModule
  ],
  declarations: [ListarInsightsPage]
})
export class ListarInsightsPageModule {}
