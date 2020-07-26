import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListarMetasPageRoutingModule } from './listar-metas-routing.module';

import { ListarMetasPage } from './listar-metas.page';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListarMetasPageRoutingModule,

  ],
  declarations: [ListarMetasPage],
  providers: [
    InAppBrowser
  ]
})
export class ListarMetasPageModule { }
