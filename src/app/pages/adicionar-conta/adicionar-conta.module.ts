import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdicionarContaPageRoutingModule } from './adicionar-conta-routing.module';

import { AdicionarContaPage } from './adicionar-conta.page';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    AdicionarContaPageRoutingModule
  ],
  declarations: [AdicionarContaPage],
  providers: [InAppBrowser]
})

export class AdicionarContaPageModule { }
