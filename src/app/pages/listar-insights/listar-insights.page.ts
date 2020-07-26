import { Component, OnInit } from '@angular/core';
import { Utils } from 'src/app/utils';
import { LoadingController, AlertController, NavController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-listar-insights',
  templateUrl: './listar-insights.page.html',
  styleUrls: ['./listar-insights.page.scss'],
})
export class ListarInsightsPage extends Utils implements OnInit {

  constructor(public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public navCtrl: NavController,
    public menuCtrl: MenuController) {
    super(loadingCtrl, alertCtrl, navCtrl, menuCtrl);
  }

  ngOnInit() {

  }
}

