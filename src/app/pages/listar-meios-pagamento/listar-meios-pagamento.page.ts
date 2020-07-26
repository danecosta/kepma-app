import { Component, OnInit } from '@angular/core';
import { Utils } from 'src/app/utils';
import { LoadingController, AlertController, NavController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-listar-meios-pagamento',
  templateUrl: './listar-meios-pagamento.page.html',
  styleUrls: ['./listar-meios-pagamento.page.scss'],
})
export class ListarMeiosPagamentoPage extends Utils implements OnInit {

  abaSelecionada = "contas";

  constructor(public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public navCtrl: NavController,
    public menuCtrl: MenuController) {
    super(loadingCtrl, alertCtrl, navCtrl, menuCtrl);
  }

  ngOnInit() {
  }

  mudarAba(event) {

  }

}

