import { Component, OnInit } from '@angular/core';
import { Utils } from 'src/app/utils';
import { LoadingController, AlertController, NavController, MenuController } from '@ionic/angular';
import { Usuario } from './../../models/usuario.model';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import axios from 'axios';

@Component({
  selector: 'app-listar-meios-pagamento',
  templateUrl: './listar-meios-pagamento.page.html',
  styleUrls: ['./listar-meios-pagamento.page.scss'],
})
export class ListarMeiosPagamentoPage extends Utils implements OnInit {

  abaSelecionada = 'contas';
  usuario: Usuario = new Usuario();
  contas = [];
  contas_tecban = [];

  constructor(public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    private angularFirestore: AngularFirestore,
    private fbAuth: AngularFireAuth) {
    super(loadingCtrl, alertCtrl, navCtrl, menuCtrl);
  }

  ngOnInit() {
  }

  mudarAba(event) {

  }

  ionViewWillEnter() {
    this.sessionVerify().then(() => {
      console.log(this.usuario);
    });
  }

  async sessionVerify() {
    this.fbAuth.authState.subscribe((retorno) => {
      if (retorno) {
        this.contas = [];
        this.contas_tecban = [];
        this.obterContas(retorno.email);
        this.obterContasTecBan();
      }
    });
  }

  carregarLogo(banco) {
    if (banco === 'Itaú') {
      return 'assets/imgs/itau.png';
    } else if (banco === 'Santander') {
      return 'assets/imgs/santander.png';
    } else if (banco === 'Nubank') {
      return 'assets/imgs/nubank.png';
    }
  }

  obterContas(email) {
    const profileRef = this.angularFirestore.collection('conta');

    profileRef.ref.where(`usuario`, '==', email).get().then(x => {
      x.forEach(doc => {
        console.log(doc.data());
        this.contas.push({
          banco: doc.data().banco,
          numero_agencia: doc.data().numero_agencia,
          numero_conta: doc.data().numero_conta,
          tipo_conta: doc.data().usuario,
          created_at: doc.data().created_at
        });

      });
    }).then(() => {
      console.log(this.contas);
    });
  }

  async obterContasTecBan() {
    const code = sessionStorage.getItem('AUTH_FINAL_CODE');
    const result = await axios.get(`http://192.168.100.8:8057/api/bank/saldo?code=${code}`);
  }
}
