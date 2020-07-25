import { Component, OnInit } from '@angular/core';
import { Utils } from 'src/app/utils';
import { LoadingController, AlertController, NavController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-novo-vinculo',
  templateUrl: './novo-vinculo.page.html',
  styleUrls: ['./novo-vinculo.page.scss'],
})
export class NovoVinculoPage extends Utils implements OnInit {

  constructor(public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public navCtrl: NavController,
    public menuCtrl: MenuController) {
    super(loadingCtrl, alertCtrl, navCtrl, menuCtrl);
  }
  ngOnInit() {
  }

}
