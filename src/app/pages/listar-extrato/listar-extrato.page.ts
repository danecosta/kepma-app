import { Component, OnInit } from '@angular/core';
import { Utils } from 'src/app/utils';
import { LoadingController, AlertController, NavController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-listar-extrato',
  templateUrl: './listar-extrato.page.html',
  styleUrls: ['./listar-extrato.page.scss'],
})
export class ListarExtratoPage extends Utils implements OnInit {

  periodo: string;
  tipo: string;

  constructor(public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public navCtrl: NavController,
    public menuCtrl: MenuController) {
    super(loadingCtrl, alertCtrl, navCtrl, menuCtrl);
  }

  ngOnInit() {
  }

}
